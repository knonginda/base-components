const _ = require('lodash')

module.exports = {
  all: [
    {
      header: {
        title: 'Applications',
        routeTo: '',
        permissions: [
          'RIGHT_VIEW_BATCH_ENTRY',
          'RIGHT_VIEW_IFP_DOC_MANAGER',
          'RIGHT_GLOBAL_SEARCH',
          'RIGHT_VIEW_SEARCH',
          'RIGHT_VIEW_WK_QUEUE',
          'RIGHT_VIEW_SERVICE_TICKET',
          'RIGHT_VIEW_SUBMITTED_APP_MANAGER',
        ],
      },
      items: [
        {
          title: 'Application Batch Entry',
          routeTo: 'applications-application-batch-entry',
          permissions: ['RIGHT_VIEW_BATCH_ENTRY'],
        },
        {
          title: 'Document Manager',
          routeTo: 'applications-document-manager',
          permissions: ['RIGHT_VIEW_IFP_DOC_MANAGER'],
        },
        {
          title: 'Global Search',
          routeTo: 'applications-global-search',
          permissions: ['RIGHT_GLOBAL_SEARCH'],
        },
        {
          title: 'Individual Search',
          routeTo: 'applications-individual-search',
          permissions: ['RIGHT_VIEW_SEARCH'],
        },
        {
          title: 'My App Work Queue',
          routeTo: 'applications-my-app-work-queue',
          permissions: ['RIGHT_VIEW_WK_QUEUE'],
        },
        {
          title: 'My Service Tickets',
          routeTo: 'applications-my-service-tickets',
          permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
        },
        {
          title: 'Submitted App Manager',
          routeTo: 'applications-submitted-app-manager',
          permissions: ['RIGHT_VIEW_SUBMITTED_APP_MANAGER'],
        },
      ],
    },
    {
      header: {
        title: 'Leads',
        routeTo: '',
        permissions: [
          'RIGHT_VIEW_LEAD_SEARCH',
          'RIGHT_VIEW_WK_QUEUE',
          'RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT',
        ],
      },
      items: [
        {
          title: 'Global Search',
          routeTo: 'leads-global-search',
          permissions: ['RIGHT_VIEW_LEAD_SEARCH'],
        },
        {
          title: 'Individual Search',
          routeTo: 'leads-individual-search',
          permissions: ['RIGHT_VIEW_LEAD_SEARCH'],
        },
        {
          title: 'Inbound Enrollment Script',
          routeTo: 'leads-inbound-enrollment-script',
          permissions: ['RIGHT_VIEW_MEDICARE_INBOUND_SCRIPT'],
        },
        {
          title: 'Lead Creation Batch',
          routeTo: 'leads-lead-creation-batch',
          permissions: ['RIGHT_LEAD_CREATION_BATCH'],
        },
        {
          title: 'My Lead Work Queue',
          routeTo: 'leads-my-lead-work-queue',
          permissions: ['RIGHT_VIEW_WK_QUEUE'],
        },
      ],
    },

    {
      header: {
        title: 'Tasks',
        routeTo: '',
        permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE', 'RIGHT_VIEW_SERVICE_TICKET'],
      },
      items: [
        {
          header: {
            title: 'App Universal WQ',
            routeTo: 'tasks-app-universal-wq',
            permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
          },
          children: [
            {
              title: 'All',
              routeTo: 'tasks-app-universal-wq',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Administrator',
              routeTo: 'tasks-app-universal-wq-administrator',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Clerk',
              routeTo: 'tasks-app-universal-wq-clerk',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Customer Retention',
              routeTo: 'tasks-app-universal-wq-customer-retention',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Customer Service',
              routeTo: 'tasks-app-universal-wq-customer-service',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'External User',
              routeTo: 'tasks-app-universal-wq-external-user',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'External Supervisor',
              routeTo: 'tasks-app-universal-wq-external-supervisor',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Forms Administrator',
              routeTo: 'tasks-app-universal-wq-forms-administrator',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'IFP Sales Rep',
              routeTo: 'tasks-app-universal-wq-ifp-sales-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Compliance',
              routeTo: 'tasks-app-universal-wq-medicare-compliance',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Customer Service',
              routeTo: 'tasks-app-universal-wq-medicare-custome-service',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Enrollment',
              routeTo: 'tasks-app-universal-wq-medicare-enrollment',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'MS Enrollment Specialist',
              routeTo: 'tasks-app-universal-wq-ms-enrollment-specialist',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Sales',
              routeTo: 'tasks-app-universal-wq-medicare-sales',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Supervisor',
              routeTo: 'tasks-app-universal-wq-medicare-supervisor',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Outbound Rep',
              routeTo: 'tasks-app-universal-wq-outbound-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'PPS Rep',
              routeTo: 'tasks-app-universal-wq-pps-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Reviewer',
              routeTo: 'tasks-app-universal-wq-reviewer',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Reviewer-CS',
              routeTo: 'tasks-app-universal-wq-reviewer-cs',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Sales Support',
              routeTo: 'tasks-app-universal-wq-sales-support',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Telesales Rep',
              routeTo: 'tasks-app-universal-wq-telesales-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
          ],
        },
        {
          title: 'App WQ Manager',
          routeTo: 'tasks-app-wq-manager',
          permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
        },
        {
          header: {
            title: 'Lead Universal WQ',
            routeTo: 'tasks-lead-universal-wq',
            permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
          },
          children: [
            {
              title: 'All',
              routeTo: 'tasks-lead-universal-wq',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Clerk',
              routeTo: 'tasks-lead-universal-wq-clerk',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Customer Retention',
              routeTo: 'tasks-lead-universal-wq-customer-retention',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Customer Service',
              routeTo: 'tasks-lead-universal-wq-customer-service',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'External User',
              routeTo: 'tasks-lead-universal-wq-external-user',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'External Supervisor',
              routeTo: 'tasks-lead-universal-wq-external-supervisor',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Forms Administrator',
              routeTo: 'tasks-lead-universal-wq-forms-administrator',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'IFP Sales Rep',
              routeTo: 'tasks-lead-universal-wq-ifp-sales-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Compliance',
              routeTo: 'tasks-lead-universal-wq-medicare-compliance',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Customer Service',
              routeTo: 'tasks-lead-universal-wq-medicare-customer-service',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Enrollment',
              routeTo: 'tasks-lead-universal-wq-medicare-enrollment',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'MS Enrollment Specialist',
              routeTo: 'tasks-lead-universal-wq-ms-enrollment-specialist',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Sales',
              routeTo: 'tasks-lead-universal-wq-medicare-sales',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Medicare Supervisor',
              routeTo: 'tasks-lead-universal-wq-medicare-supervisor',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Outbound Rep',
              routeTo: 'tasks-lead-universal-wq-outbound-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'PPS Rep',
              routeTo: 'tasks-lead-universal-wq-pps-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Reviewer',
              routeTo: 'tasks-lead-universal-wq-reviewer',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Reviewer-CS',
              routeTo: 'tasks-lead-universal-wq-reviewer-cs',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Sales Support',
              routeTo: 'tasks-lead-universal-wq-sales-support',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
            {
              title: 'Telesales Rep',
              routeTo: 'tasks-lead-universal-wq-telesales-rep',
              permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
            },
          ],
        },
        {
          title: 'Lead WQ Manager',
          routeTo: 'tasks-lead-wq-manager',
          permissions: ['RIGHT_VIEW_UNIV_WRK_QUEUE'],
        },
        {
          header: {
            title: 'Universal Service Tickets',
            routeTo: 'tasks-universal-service-tickets',
            permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
          },
          children: [
            {
              title: 'All',
              routeTo: 'tasks-universal-service-tickets',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Administrator',
              routeTo: 'tasks-universal-service-tickets-administrator',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Customer Service',
              routeTo: 'tasks-universal-service-tickets-customer-service',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Customer Retention',
              routeTo: 'tasks-universal-service-tickets-customer-retention',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Medicare Enrollment',
              routeTo: 'tasks-universal-service-tickets-medicare-enrollment',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'MS Enrollment Specialist',
              routeTo:
                'tasks-universal-service-tickets-ms-enrollment-specialist',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Medicare Compliance',
              routeTo: 'tasks-universal-service-tickets-medicare-compliance',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Medicare Supervisor',
              routeTo: 'tasks-universal-service-tickets-medicare-supervisor',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'IFP Sales Rep',
              routeTo: 'tasks-universal-service-tickets-ifp-sales-rep',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Outbound Rep',
              routeTo: 'tasks-universal-service-tickets-outbound-rep',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Reviewer',
              routeTo: 'tasks-universal-service-tickets-reviewer',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Reviewer-CS',
              routeTo: 'tasks-universal-service-tickets-reviewer-cs',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Sales Support',
              routeTo: 'tasks-universal-service-tickets-sales-support',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Supervisor',
              routeTo: 'tasks-universal-service-tickets-supervisor',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
            {
              title: 'Senior Enrollment Rep',
              routeTo: 'tasks-universal-service-tickets-senior-enrollment-rep',
              permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
            },
          ],
        },
      ],
    },

    {
      header: {
        title: 'Email',
        routeToName: '',
        permissions: [
          'RIGHT_VIEW_AUTO_EMAIL',
          'RIGHT_VIEW_AUTO_EMAIL_LEADS',
          'RIGHT_VIEW_BULK_EMAIL',
          'RIGHT_VIEW_OUTGOING_TEMPLATE',
          'RIGHT_ATTACHMENT',
        ],
      },
      items: [
        {
          title: 'Auto Email - Application',
          routeTo: 'email-auto-email-application',
          permissions: ['RIGHT_VIEW_SERVICE_TICKET'],
        },
        {
          title: 'Auto Email - Lead',
          routeTo: 'email-auto-email-lead',
          permissions: ['RIGHT_VIEW_AUTO_EMAIL_LEADS'],
        },
        {
          title: 'Attachment Manager',
          routeTo: 'email-attachment-manager',
          permissions: ['RIGHT_ATTACHMENT'],
        },
        {
          title: 'Bulk Email',
          routeTo: 'email-bulk-email',
          permissions: ['RIGHT_VIEW_BULK_EMAIL'],
        },
        {
          title: 'Bulk Email II',
          routeTo: 'email-bulk-email-2',
          permissions: ['RIGHT_VIEW_BULK_EMAIL'],
        },
        {
          title: 'Template Maintenance',
          routeTo: 'email-template-maintenance',
          permissions: ['RIGHT_VIEW_OUTGOING_TEMPLATE'],
        },
      ],
    },
    {
      header: {
        title: 'Users',
        routeTo: '',
        permissions: [
          'RIGHT_MEDICARE_SALES_VIEW_CALENDAR',
          'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
          'RIGHT_VIEW_SALES_LICENSING',
          'RIGHT_VIEW_ORGANIZATION_CONFIGURATION',
          'RIGHT_CREATE_IDENTITY',
          'RIGHT_VIEW_UPDATE_USERS',
          'RIGHT_VIEW_SEARCH_USERS',
          'RIGHT_VIEW_CREATE_NEW_USERS',
          'RIGHT_VIEW_OPS_SRCH_ASSIGN',
        ],
      },
      items: [
        {
          title: 'Create System-Level User',
          routeTo: 'users-create-system-level-user',
          permissions: ['RIGHT_VIEW_CREATE_NEW_USERS'],
        },
        {
          title: 'Bulk User Provisioning',
          routeTo: 'users-bulk-user-provisioning',
          permissions: ['RIGHT_VIEW_CREATE_NEW_USERS'],
        },
        {
          title: 'Enrollment Assignment',
          routeTo: 'users-enrollment-assignment',
          permissions: ['RIGHT_VIEW_OPS_SRCH_ASSIGN'],
        },
        {
          title: 'Update System-Level User',
          routeTo: 'users-update-system-level-user',
          permissions: ['RIGHT_VIEW_UPDATE_USERS', 'RIGHT_VIEW_SEARCH_USERS'],
        },
        {
          title: 'Create eHealth ID',
          routeTo: 'users-create-ehealth-id',
          permissions: ['RIGHT_CREATE_IDENTITY'],
        },
        {
          title: 'Update eHealth ID',
          routeTo: 'users-update-ehealth-id',
          permissions: ['RIGHT_CREATE_IDENTITY'],
        },
        {
          title: 'Update Agent Licensing',
          routeTo: 'users-update-agent-licensing',
          permissions: ['RIGHT_LICENSING_ADMIN'],
        },
        {
          title: 'View Agent Dashboards',
          routeTo: 'users-view-agent-dashboards',
          permissions: ['RIGHT_VIEW_AGENT_DASHBOARDS'],
        },
        {
          title: 'View Medicare Agent Calendar',
          routeTo: 'users-view-medicare-agent-calendar',
          permissions: ['RIGHT_MEDICARE_SALES_VIEW_CALENDAR'],
        },
        {
          title: 'View Agent Licensing',
          routeTo: 'users-view-agent-licensing',
          permissions: [
            'RIGHT_VIEW_MEDICARE_SALES_LICENSING',
            'RIGHT_VIEW_SALES_LICENSING',
          ],
        },
      ],
    },
    {
      header: {
        title: 'Utilities',
        routeTo: '',
        permissions: [
          'RIGHT_VIEW_SCRIPT_ERROR_REPORTING',
          'RIGHT_SALES_PROGRAMS',
          'RIGHT_IFP_ADMIN_RIDERS',
          'RIGHT_REAL_TIME_CALLING_DASHBOARD',
          'RIGHT_CARRIER_ADMINISTRATION',
          'RIGHT_SCRIPT_MESSAGE',
          'RIGHT_VIEW_MEDICARE_APPOINTMENT_SUMMARY',
          'RIGHT_VIEW_MEDICARE_MANAGER_OVERRIDE_CODE_ADMIN',
          'RIGHT_MEDICARE_ENROLLMENT_DASHBOARD',
          'RIGHT_VIEW_CARRIER_SYNC_REQUEST',
          'RIGHT_CARRIER_FAMILY_CONFIG',
          'RIGHT_HOURS_OF_OPERATION',
        ],
      },
      items: [
        {
          title: 'Carrier Administration',
          routeTo: 'utilities-carrier-administration',
          permissions: ['RIGHT_CARRIER_ADMINISTRATION', 'RIGHT_SCRIPT_MESSAGE'],
        },
        {
          title: 'Carrier Configuration Tool',
          routeTo: 'utilities-carrier-configuration-tool',
          permissions: ['RIGHT_CARRIER_FAMILY_CONFIG'],
        },
        {
          title: 'Carrier Sync',
          routeTo: 'utilities-carrier-sync',
          permissions: ['RIGHT_VIEW_CARRIER_SYNC_REQUEST'],
        },
        {
          title: 'EPI3 File Transfer',
          routeTo: 'utilities-epi3-file-transfer',
          permissions: ['RIGHT_EPI_RESEND'],
        },
        {
          title: 'Hours of Operation',
          routeTo: 'utilities-hours-of-operation',
          permissions: ['RIGHT_HOURS_OF_OPERATION'],
        },
        {
          title: 'LiveOps Mapping',
          routeTo: 'utilities-liveops-mapping',
          permissions: ['RIGHT_LIVE_OPS_MAPPING'],
        },
        {
          title: 'Medicare Appointments',
          routeTo: 'utilities-medicare-appointments',
          permissions: ['RIGHT_VIEW_MEDICARE_APPOINTMENT_SUMMARY'],
        },
        {
          title: 'Medicare Enrollment Dashboard',
          routeTo: 'utilities-medicare-enrollment-dashboard',
          permissions: ['RIGHT_MEDICARE_ENROLLMENT_DASHBOARD'],
        },
        {
          title: 'Manage IFP Call Volume',
          routeTo: 'utilities-manage-ifp-call-volume',
          permissions: ['RIGHT_MANAGE_IFP_CALL_VOLUME'],
        },
        {
          title: 'Medicare Lead Activities',
          routeTo: 'utilities-medicare-lead-activities',
          permissions: ['RIGHT_VIEW_MEDICARE_LEAD_RTC_LOG'],
        },
        {
          title: 'Medicare Manager Override Code',
          routeTo: 'utilities-medicare-manager-override-code',
          permissions: ['RIGHT_VIEW_MEDICARE_MANAGER_OVERRIDE_CODE_ADMIN'],
        },
        {
          title: 'Partner Registration Tool',
          routeTo: 'utilities-partner-registration-tool',
          permissions: ['RIGHT_PARTNER_REGISTRATION_TOOL'],
        },
        {
          title: 'Rider Maintenance',
          routeTo: 'utilities-rider-maintenance',
          permissions: ['RIGHT_IFP_ADMIN_RIDERS'],
        },
        {
          title: 'Real-Time Calling',
          routeTo: 'utilities-real-time-calling',
          permissions: ['RIGHT_REAL_TIME_CALLING_DASHBOARD'],
        },
        {
          title: 'Script Error Log',
          routeTo: 'utilities-script-error-log',
          permissions: ['RIGHT_VIEW_SCRIPT_ERROR_REPORTING'],
        },
        {
          title: 'Sales Programs',
          routeTo: 'utilities-sales-programs',
          permissions: ['RIGHT_SALES_PROGRAMS'],
        },
      ],
    },
  ],
  getData() {
    return this.all
  },
}
