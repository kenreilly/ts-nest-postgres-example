#!/usr/bin/env bash
psql postgres -c "CREATE USER ts_pg_example_user WITH LOGIN SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION PASSWORD 'insecure_password'"
psql postgres -c "CREATE DATABASE ts_pg_example WITH OWNER = ts_pg_example_user ENCODING = 'UTF8' CONNECTION LIMIT = -1;"
psql ts_pg_example -f schema.sql 
