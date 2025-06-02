interface CertificatesImage {
  url: string
}

interface CertificatesItems {
  title: string,
  img: CertificatesImage
}

interface navbarItems {
  home: string;
  about: string;
  portfolio: string;
  contact: string;
}

interface portfolioItems {
  title: string,
  navPorjects: string,
  buttonProjects: string,
  navCertificates: string
  buttonCertificates: string,
  navSkills: string
}

interface navbarCollectionData {
  items: navbarItems[];
}

interface portfolioCollectionData {
  items: portfolioItems[];
}

interface navbarCollection {
  navbarCollection: navbarCollectionData;
}

interface portfolioCollection {
  portfolioCollection: portfolioCollectionData;
}

interface CertificatesCollection {
  certificatesCollection: CertificatesCollectionData;
}

interface NetlifySite {
  id: string;
  site_id: string;
  plan: string;
  ssl_plan: string | null;
  premium: boolean;
  claimed: boolean;
  name: string;
  custom_domain: string | null;
  branch_deploy_custom_domain: string | null;
  deploy_preview_custom_domain: string | null;
  domain_aliases: string[];
  sso_login: boolean;
  sso_login_context: string;
  notification_email: string | null;
  url: string;
  admin_url: string;
  deploy_id: string;
  build_id: string;
  deploy_url: string;
  state: string;
  screenshot_url: string | null;
  created_at: string;
  updated_at: string;
  user_id: string;
  error_message: string | null;
  ssl: boolean;
  ssl_url: string;
  force_ssl: boolean | null;
  ssl_status: string | null;
  max_domain_aliases: number;
  build_settings: BuildSettings;
  dev_server_settings: Record<string, null>;
  processing_settings: ProcessingSettings;
  prerender: string | null;
  prerender_headers: string | null;
  deploy_hook: string;
  published_deploy: PublishedDeploy | null;
  managed_dns: boolean;
  jwt_secret: string | null;
  jwt_roles_path: string;
  account_id: string;
  account_slug: string;
  account_name: string;
  account_type: string;
  capabilities: Capabilities;
  dns_zone_id: string | null;
  identity_instance_id: string | null;
  primary_create_project: boolean | null;
  use_functions: boolean | null;
  use_edge_handlers: boolean | null;
  use_forms: boolean | null;
  parent_user_id: string | null;
  automatic_tls_provisioning: boolean | null;
  disabled: boolean | null;
  disabled_reason: string | null;
  lifecycle_state: string;
  id_domain: string;
  use_lm: boolean | null;
  build_image: string;
  automatic_tls_provisioning_expired: boolean;
  analytics_instance_id: string | null;
  functions_region: string;
  functions_timeout: number | null;
  plugins: [];
  account_subdomain: string | null;
  cdp_enabled_contexts: string[];
  deploy_retention_in_days: number;
  build_timelimit: number | null;
  password_context: string;
  hud_enabled: boolean;
  labels: [];
  traffic_rules_config_per_scope: Record<string, null>;
  visual_editor_active: boolean | null;
  description: string | null;
  description_hidden: boolean | null;
  dev_server_resources: null | null;
  created_via: string | null;
  deploy_origin: Record<string, null>;
  cover_url: string | null;
  feature_flags: Record<string, boolean> | null;
  versions: Versions;
  has_password: boolean;
  default_domain: string;
  use_envelope: boolean;
}

interface NetlifyProjects {
  id: string | number;
  name: string;
  screen: string;
  url: string;
}

interface Certificate {
  title: string,
  img: {
    url: string
  }
}

