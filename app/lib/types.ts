export type UserData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
};

export type SessionData = {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
  user: UserData;
};

export type RepoWithLanguages = {
  repo: {
    description: string | null;
    full_name: string;
    stargazers_count: number;
    visibility: string;
    updated_at: string;
    languages_url: string;
  };
  languages: Record<string, number>;
};

export type Activity = {
  payload: {};
};
