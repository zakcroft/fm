export type JobType = {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: Date;
  description: string;
  how_to_apply: string;
  id: string;
  location: string;
  title: string;
  type: string;
  url: string;
};

export type SearchType = {
  description: string;
  location: string;
  full_time: boolean;
};
