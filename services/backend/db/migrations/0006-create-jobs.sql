CREATE TABLE IF NOT EXISTS job_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  title TEXT UNIQUE NOT NULL,
  notes TEXT,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON job_types(title);
CREATE INDEX ON job_types(_created_at);
CREATE INDEX ON job_types(_updated_at);

DROP TRIGGER IF EXISTS a_job_types_timestamp_trigger ON job_types;

CREATE TRIGGER a_job_types_timestamp_trigger
  BEFORE UPDATE ON job_types
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

-- ALTER TABLE job_types ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY show_job_types
--   ON job_types
--   FOR SELECT
--   TO PUBLIC
--   USING (TRUE);

---

CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id),
  job_type_id UUID REFERENCES job_types(id),

  title TEXT NOT NULL,
  region regions NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  number_of_openings INT DEFAULT 1,

  external_url TEXT,
  notes TEXT,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON jobs(title);
CREATE INDEX ON jobs(region);
CREATE INDEX ON jobs(start_date);
CREATE INDEX ON jobs(end_date);
CREATE INDEX ON jobs(number_of_openings);
CREATE INDEX ON jobs(_created_at);
CREATE INDEX ON jobs(_updated_at);

DROP TRIGGER IF EXISTS a_jobs_timestamp_trigger ON jobs;

CREATE TRIGGER a_jobs_timestamp_trigger
  BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

-- ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY show_jobs
--   ON jobs
--   FOR SELECT
--   TO PUBLIC
--   USING (TRUE);