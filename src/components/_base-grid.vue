<script>
import { drop, take, remove } from 'lodash'

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    query: {
      type: Object,
      required: true,
    },
    selector: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    var sortOrders = {}
    var sortKey = this.query.sort

    this.columns.forEach((column) => {
      sortOrders[column.key] = 1
    })

    if (sortKey) {
      if (this.query.order === 'desc') {
        sortOrders[sortKey] = sortOrders[sortKey] * -1
      } else {
        sortOrders[sortKey] = sortOrders[sortKey] * 1
      }
    }

    return {
      sortKey: sortKey || '',
      sortOrders: sortOrders,
      total: this.data.length,
      selectedItems: [],
      isSelectAll: false,
    }
  },
  computed: {
    filteredData() {
      var data = this.data
      data = this.getFilterData(data)
      data = this.getSortData(data)
      this.setTotal(data.length)
      data = this.getPaginationData(data)
      return data
    },

    isFirstPage() {
      return +this.query.offset === 0 || +this.query.limit >= this.total
    },

    isLastPage() {
      return +this.query.offset + +this.query.limit >= this.total
    },

    totalPage() {
      return Math.ceil(this.total / +this.query.limit)
    },

    curPage() {
      return Math.ceil(+this.query.offset / +this.query.limit) + 1
    },

    dspBtns() {
      const n = this.totalPage
      const i = this.curPage
      if (n <= 9) {
        return ((n) => {
          const array = Array(n)
          while (n) {
            array[n - 1] = n--
          }
          return array
        })(n)
      }
      if (i <= 5) {
        return [1, 2, 3, 4, 5, 6, 7, 0, n] // 0 represents `···`
      }
      if (i >= n - 4) {
        return [1, 0, n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n]
      }
      return [1, 0, i - 2, i - 1, i, i + 1, i + 2, 0, n]
    },
  },
  watch: {
    query: {
      handler(query) {
        if (this.filteredData.length === 0 && this.curPage !== 1) {
          this.handleClick(1)
        }
      },
      deep: true,
    },
  },
  methods: {
    setTotal(total) {
      this.total = total
    },

    sortBy(column) {
      this.sortKey = column.key
      this.sortOrders[column.key] = this.sortOrders[column.key] * -1
    },

    handleClick(n) {
      this.query.offset = (n - 1) * +this.query.limit
    },

    turnPage(i) {
      if ((i < 0 && this.isFirstPage) || (i > 0 && this.isLastPage)) return
      this.query.offset = +this.query.offset + i * +this.query.limit
    },

    getFilterData(data) {
      var filterKey = this.query.filterKey && this.query.filterKey.toLowerCase()
      if (filterKey) {
        data = data.filter((row) => {
          return Object.keys(row).some((key) => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      return data
    },

    getSortData(data) {
      var sortKey = this.sortKey
      var order = this.sortOrders[sortKey] || 1
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    },

    getPaginationData(data) {
      if (this.query.offset >= 0) {
        data = take(drop(data, this.query.offset), this.query.limit)
      }
      return data
    },

    select(item) {
      var selectedItems = this.selectedItems
      if (item['isSelected']) {
        selectedItems.push(item)
        return selectedItems
      } else {
        selectedItems = remove(this.selectedItems, (removedItem) => {
          return removedItem === item
        })
        return selectedItems
      }
    },

    selectAll() {
      let data = this.getFilterData(this.data)
      for (let item of data) {
        if (this.isSelectAll) {
          if (!this.selectedItems.includes(item)) {
            item.isSelected = true
            this.selectedItems.push(item)
          }
        } else {
          for (let removeItem of this.selectedItems) {
            removeItem.isSelected = false
          }
          this.selectedItems = []
        }
      }
    },
  },
}
</script>

<template>
  <div>
    <table :class="$style.table">
      <thead>
        <tr>
          <th v-if="selector" :class="$style.selectorColumn">
            <input v-model="isSelectAll" type="checkbox" @change="selectAll()">
          </th>
          <th
            v-for="(column, index) in columns"
            :key="index"
            :class="sortKey === column.key ? $style.active : ''"
            @click="sortBy(column)"
          >
            {{ column.label }}
            <BaseIcon
              v-if="sortOrders[column.key] > 0"
              :class-name="$style.sortIcon"
              color="#ffffff"
              name="caret-up"
            ></BaseIcon>
            <BaseIcon v-else :class-name="$style.sortIcon" color="#ffffff" name="caret-down"></BaseIcon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredData" :key="index">
          <td v-if="selector">
            <input v-model="item['isSelected']" type="checkbox" @change="select(item)">
          </td>
          <td v-for="(column, index2) in columns" :key="index2">{{ item[column.key] }}</td>
        </tr>
      </tbody>
    </table>
    <div :class="$style.bottomSpace">
      <div :class="$style.total">
        Total:
        <strong>{{ total }}</strong>
      </div>
      <ul :class="$style.pagination" name="Pagination">
        <li v-if="!isFirstPage" :class="$style.pageItem" @click="turnPage(-1)">
          <a href="#" :class="$style.pageLink" @click.prevent>
            <BaseIcon name="caret-left"></BaseIcon>
          </a>
        </li>
        <li
          v-for="(i, index) in dspBtns"
          :key="index"
          :class="[$style.pageItem, i === curPage ? $style.currentPage : '']"
        >
          <a v-if="i" href="#" :class="$style.pageLink" @click.prevent="handleClick(i)">{{ i }}</a>
          <a v-else :class="$style.pageLink">...</a>
        </li>
        <li v-if="!isLastPage" :class="$style.pageItem" @click="turnPage(1)">
          <a href="#" :class="$style.pageLink" @click.prevent>
            <BaseIcon name="caret-right"></BaseIcon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.table {
  width: 100%;
  height: 100%;
  border: 2px solid $blue;
  border-radius: 3px;
  background-color: #fff;
  border-collapse: collapse;
  text-align: left;

  th {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.66);
    background-color: $blue;
    user-select: none;

    > span {
      color: rgba(255, 255, 255, 0.66) !important;
    }

    &.active {
      opacity: 1;
      color: #fff;

      > span {
        color: #fff !important;
      }
    }
  }

  td {
    background-color: #f9f9f9;
  }
}

.sortIcon {
  width: 14px;
  height: 14px;
  margin-left: 5px;
}

.ellipsisIcon {
  width: 12px;
  height: 12px;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
  }
}

.pageItem > a {
  margin-left: 10px;
  background: #f2f2f2;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 26px;
  color: #333;
  display: block;

  .pageLink {
    display: block;
  }
}

.currentPage > a {
  background: $blue;
  color: #fff;
}

.bottomSpace {
  display: flex;
  justify-content: space-between;
}

.total {
  padding: 8px;
}

.selectorColumn {
  width: 36px;

  svg ~ span {
    display: none;
  }
}
</style>
