CREATE ROLE default_role;
GRANT USAGE ON SCHEMA public TO default_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO default_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT EXECUTE ON FUNCTIONS TO default_role;

-- https://www.graphile.org/postgraphile/security/
CREATE FUNCTION current_user_id() RETURNS UUID AS $$
  SELECT nullif(current_setting('jwt.claims.user_id', true), '')::UUID;
$$ LANGUAGE SQL stable;
COMMENT ON FUNCTION current_user_id IS E'@omit';