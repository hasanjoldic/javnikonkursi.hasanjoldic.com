CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  title TEXT UNIQUE NOT NULL,
  url TEXT UNIQUE NOT NULL,
  region regions,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON companies(title);
CREATE INDEX ON companies(url);
CREATE INDEX ON companies(_created_at);
CREATE INDEX ON companies(_updated_at);

DROP TRIGGER IF EXISTS a_companies_timestamp_trigger ON companies;

CREATE TRIGGER a_companies_timestamp_trigger
  BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

-- ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY show_companies
--   ON companies
--   FOR SELECT
--   TO PUBLIC
--   USING (TRUE);