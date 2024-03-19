--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO betyaevilya;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_group ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_group_permissions (
    id bigint NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO betyaevilya;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_group_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO betyaevilya;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_permission ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO betyaevilya;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_user_groups (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO betyaevilya;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_user_groups ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_user ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.auth_user_user_permissions (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO betyaevilya;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.auth_user_user_permissions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.auth_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: catalogue_items_mosaic; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.catalogue_items_mosaic (
    id bigint NOT NULL,
    articul text NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    image2 text NOT NULL,
    image3 text NOT NULL,
    image4 text NOT NULL,
    image5 text NOT NULL
);


ALTER TABLE public.catalogue_items_mosaic OWNER TO betyaevilya;

--
-- Name: catalogue_items_mosaic_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.catalogue_items_mosaic ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.catalogue_items_mosaic_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO betyaevilya;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.django_admin_log ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO betyaevilya;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.django_content_type ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.django_migrations (
    id bigint NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO betyaevilya;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: betyaevilya
--

ALTER TABLE public.django_migrations ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: betyaevilya
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO betyaevilya;

--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add mosaic	7	add_mosaic
26	Can change mosaic	7	change_mosaic
27	Can delete mosaic	7	delete_mosaic
28	Can view mosaic	7	view_mosaic
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$600000$bZGsWouDF2IO9h159TsEny$klh78Z1fltK/PcEk5ihvnWuYup19zSYq+FHpwqMlF/c=	2024-03-19 17:05:10.34867+00	t	betyaevilya			sdfs@gmail.com	t	t	2024-03-17 08:46:02.020933+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: catalogue_items_mosaic; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.catalogue_items_mosaic (id, articul, title, description, image, image2, image3, image4, image5) FROM stdin;
8	8	Ёжик в тумане	Ежик обычный в тумане	https://downloader.disk.yandex.ru/preview/6894b9d317fe5b1edbce038651dbbac3e5656d081c8cfcb005b6bdec2c7b54e9/65f9f62e/EDn7dq4Ui7Ocf3lt_bkwJA_bR-ZJiUTHLx_jMyYcdIPzvVLwmyQAIEVsjv5uZ6IUZRTdelov9dXXx2TW7Q8alw%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.09.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/6894b9d317fe5b1edbce038651dbbac3e5656d081c8cfcb005b6bdec2c7b54e9/65f9f62e/EDn7dq4Ui7Ocf3lt_bkwJA_bR-ZJiUTHLx_jMyYcdIPzvVLwmyQAIEVsjv5uZ6IUZRTdelov9dXXx2TW7Q8alw%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.09.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/6894b9d317fe5b1edbce038651dbbac3e5656d081c8cfcb005b6bdec2c7b54e9/65f9f62e/EDn7dq4Ui7Ocf3lt_bkwJA_bR-ZJiUTHLx_jMyYcdIPzvVLwmyQAIEVsjv5uZ6IUZRTdelov9dXXx2TW7Q8alw%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.09.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/6894b9d317fe5b1edbce038651dbbac3e5656d081c8cfcb005b6bdec2c7b54e9/65f9f62e/EDn7dq4Ui7Ocf3lt_bkwJA_bR-ZJiUTHLx_jMyYcdIPzvVLwmyQAIEVsjv5uZ6IUZRTdelov9dXXx2TW7Q8alw%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.09.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/6894b9d317fe5b1edbce038651dbbac3e5656d081c8cfcb005b6bdec2c7b54e9/65f9f62e/EDn7dq4Ui7Ocf3lt_bkwJA_bR-ZJiUTHLx_jMyYcdIPzvVLwmyQAIEVsjv5uZ6IUZRTdelov9dXXx2TW7Q8alw%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.09.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101
1	1	Лемур	Описание мозаики	https://downloader.disk.yandex.ru/preview/f6bf9c9ffd91de4f0c5f3131aca4662edd77648a267014349aa8a82225fc0c28/65f9f62e/0S0mnJDEAfG2VpVpBHp1zGKbH3qDxsG_bpC4jpheF7PGBDgFM9rvdr02Hv0kU_tmt53l1Dg3E2R1IEZl0FgFWg%3D%3D?uid=0&filename=2275bba0-c216-4d03-ba3d-c5320c0d15f9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/f6bf9c9ffd91de4f0c5f3131aca4662edd77648a267014349aa8a82225fc0c28/65f9f62e/0S0mnJDEAfG2VpVpBHp1zGKbH3qDxsG_bpC4jpheF7PGBDgFM9rvdr02Hv0kU_tmt53l1Dg3E2R1IEZl0FgFWg%3D%3D?uid=0&filename=2275bba0-c216-4d03-ba3d-c5320c0d15f9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/f6bf9c9ffd91de4f0c5f3131aca4662edd77648a267014349aa8a82225fc0c28/65f9f62e/0S0mnJDEAfG2VpVpBHp1zGKbH3qDxsG_bpC4jpheF7PGBDgFM9rvdr02Hv0kU_tmt53l1Dg3E2R1IEZl0FgFWg%3D%3D?uid=0&filename=2275bba0-c216-4d03-ba3d-c5320c0d15f9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/f6bf9c9ffd91de4f0c5f3131aca4662edd77648a267014349aa8a82225fc0c28/65f9f62e/0S0mnJDEAfG2VpVpBHp1zGKbH3qDxsG_bpC4jpheF7PGBDgFM9rvdr02Hv0kU_tmt53l1Dg3E2R1IEZl0FgFWg%3D%3D?uid=0&filename=2275bba0-c216-4d03-ba3d-c5320c0d15f9.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	None
2	2	Леопард	Леопард очень красивый.	https://downloader.disk.yandex.ru/preview/7d9a0a6115a027ab6d06f90be6a8b9121c529b8d349a16137beb98308cef9b42/65f9f62e/5pwYAyHQS5nnFyoI0T5N2GTKN1Ndfh-3z4jfhJcr0dWcyzATsekGmtPt-dheSddlBK2dd8mnoCqTzp3FXtmJgQ%3D%3D?uid=0&filename=IMG-20181102-WA0002.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	15	3	3	3
3	3	Спартанцы	Драка спартанцев	https://downloader.disk.yandex.ru/preview/6215b6a8b413e3262ede90fd4839fe8664f87cb68ab9844a3b318d8cc6e27858/65f9f62e/tg8EacsJBn6uo61RwvrS64MmM7uy0h-soKAkPEnKeTb5BtpK0dtJ0QbDfhE0TU7cmuv-7c6oX4Jh8TLLt7wA9g%3D%3D?uid=0&filename=IMG_20201012_114121.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	15	3	3	3
4	4	Рыба Меч	Рыба может сильно уколоть	https://downloader.disk.yandex.ru/preview/bb9324d58fdfd7de6c705093e99f19c02cf5a68fe2ce9191d562ffaba324ecf5/65f9f62e/xSpF--lkxuoR8CAObOB57LLwvv610PO5BDtPxZ59UVz8lAyvobZ-vNcAmpiY-sTs-KdJ48YR6YUoeVVL_nKCLw%3D%3D?uid=0&filename=IMG_20210713_134147.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	15	3	3	3
5	5	Будда	Это Индийский бог	https://downloader.disk.yandex.ru/preview/33aa3f78a3c7d852f59b2ff990695dc74b494192548d35b79632d9d675b52478/65f9f62e/euXvZrLHN3BwL4T5QIBT8VFnOQbyG0OnBDDUoI0if164_Du5LypaokqBxgxuKx-1pL20joctw1I-gLqx0I2r9A%3D%3D?uid=0&filename=IMG_20211209_165323.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	15	3	3	3
6	6	Причал	Очень красивый причал	https://downloader.disk.yandex.ru/preview/d87f2cb4b955cd72fcc85fe015f4ef0ac8b73b2a22c48c30ac4ff3b10926d6cf/65f9f62e/5pwYAyHQS5nnFyoI0T5N2GTKN1Ndfh-3z4jfhJcr0dUNdv76Fl4DEutb139mhkws-VzTooizBIbrWw1ZmuIYBw%3D%3D?uid=0&filename=WhatsApp%20Image%202020-02-06%20at%2018.58.46.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	15	3	3	3
7	7	Дерево Дуб	Могучее дерево	https://downloader.disk.yandex.ru/preview/ea3e8ec59356f622811821e8723e74610720a213a8098072f76328a33302e141/65f9f62e/A-dVMWJTpYS837jkT3UHXEQMhdwyfImmVOey8Hqdz3rE9DJQK_gVBQjoLDfI4mOuPF-7I1LFLWh891niin03Vg%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.08.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/ea3e8ec59356f622811821e8723e74610720a213a8098072f76328a33302e141/65f9f62e/A-dVMWJTpYS837jkT3UHXEQMhdwyfImmVOey8Hqdz3rE9DJQK_gVBQjoLDfI4mOuPF-7I1LFLWh891niin03Vg%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.08.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/ea3e8ec59356f622811821e8723e74610720a213a8098072f76328a33302e141/65f9f62e/A-dVMWJTpYS837jkT3UHXEQMhdwyfImmVOey8Hqdz3rE9DJQK_gVBQjoLDfI4mOuPF-7I1LFLWh891niin03Vg%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.08.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	https://downloader.disk.yandex.ru/preview/ea3e8ec59356f622811821e8723e74610720a213a8098072f76328a33302e141/65f9f62e/A-dVMWJTpYS837jkT3UHXEQMhdwyfImmVOey8Hqdz3rE9DJQK_gVBQjoLDfI4mOuPF-7I1LFLWh891niin03Vg%3D%3D?uid=0&filename=WhatsApp%20Image%202022-01-02%20at%2014.34.08.jpeg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2133x1101	None
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2024-03-17 08:48:38.981845+00	1	Mosaic 1, 1	1	[{"added": {}}]	7	1
2	2024-03-17 08:48:58.01204+00	2	Mosaic 2, 2	1	[{"added": {}}]	7	1
3	2024-03-17 08:49:13.617923+00	3	Mosaic 3, 3	1	[{"added": {}}]	7	1
4	2024-03-17 08:49:40.757621+00	4	Mosaic 4, 4	1	[{"added": {}}]	7	1
5	2024-03-17 08:50:02.229307+00	5	Mosaic 5, 5	1	[{"added": {}}]	7	1
6	2024-03-17 08:50:19.081843+00	6	Mosaic 6, 6	1	[{"added": {}}]	7	1
7	2024-03-17 08:50:39.072671+00	7	Mosaic 7, 7	1	[{"added": {}}]	7	1
8	2024-03-19 09:23:57.56092+00	1	Mosaic 1, 1	2	[{"changed": {"fields": ["Description"]}}]	7	1
9	2024-03-19 09:24:18.897413+00	1	Mosaic 1, 1	2	[{"changed": {"fields": ["Description"]}}]	7	1
10	2024-03-19 09:24:24.915352+00	1	Mosaic 1, 1	2	[]	7	1
11	2024-03-19 16:33:00.323301+00	1	Mosaic 1, 1	2	[{"changed": {"fields": ["Description", "Image"]}}]	7	1
12	2024-03-19 16:33:11.481687+00	2	Mosaic 2, 2	2	[]	7	1
13	2024-03-19 16:33:20.950004+00	1	Mosaic 1, 1	2	[{"changed": {"fields": ["Title"]}}]	7	1
14	2024-03-19 16:33:24.007235+00	1	Mosaic 1, 1	2	[]	7	1
15	2024-03-19 16:34:11.576799+00	2	Mosaic 2, 2	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
16	2024-03-19 16:34:54.320951+00	3	Mosaic 3, 3	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
17	2024-03-19 16:35:24.809579+00	4	Mosaic 4, 4	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
18	2024-03-19 16:35:51.932545+00	5	Mosaic 5, 5	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
19	2024-03-19 16:36:34.53486+00	6	Mosaic 6, 6	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
20	2024-03-19 16:36:34.558511+00	6	Mosaic 6, 6	2	[]	7	1
21	2024-03-19 16:37:21.017442+00	7	Mosaic 7, 7	2	[{"changed": {"fields": ["Title", "Description", "Image"]}}]	7	1
22	2024-03-19 17:05:48.705763+00	1	Mosaic 1, 1	2	[]	7	1
23	2024-03-19 17:06:50.220139+00	8	Mosaic 8, 8	1	[{"added": {}}]	7	1
24	2024-03-19 17:07:38.67463+00	8	Mosaic 8, 8	2	[]	7	1
25	2024-03-19 17:23:22.819602+00	1	Mosaic 1, 1	2	[{"changed": {"fields": ["Image2", "Image3", "Image4", "Image5"]}}]	7	1
26	2024-03-19 17:37:32.216302+00	7	Mosaic 7, 7	2	[{"changed": {"fields": ["Image2", "Image3", "Image4", "Image5"]}}]	7	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	catalogue_items	mosaic
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2024-03-17 08:45:30.681783+00
2	auth	0001_initial	2024-03-17 08:45:30.78333+00
3	admin	0001_initial	2024-03-17 08:45:30.811617+00
4	admin	0002_logentry_remove_auto_add	2024-03-17 08:45:30.819881+00
5	admin	0003_logentry_add_action_flag_choices	2024-03-17 08:45:30.828566+00
6	contenttypes	0002_remove_content_type_name	2024-03-17 08:45:30.847097+00
7	auth	0002_alter_permission_name_max_length	2024-03-17 08:45:30.858067+00
8	auth	0003_alter_user_email_max_length	2024-03-17 08:45:30.867897+00
9	auth	0004_alter_user_username_opts	2024-03-17 08:45:30.877905+00
10	auth	0005_alter_user_last_login_null	2024-03-17 08:45:30.887081+00
11	auth	0006_require_contenttypes_0002	2024-03-17 08:45:30.89124+00
12	auth	0007_alter_validators_add_error_messages	2024-03-17 08:45:30.900597+00
13	auth	0008_alter_user_username_max_length	2024-03-17 08:45:30.918877+00
14	auth	0009_alter_user_last_name_max_length	2024-03-17 08:45:30.928997+00
15	auth	0010_alter_group_name_max_length	2024-03-17 08:45:30.941696+00
16	auth	0011_update_proxy_permissions	2024-03-17 08:45:30.950017+00
17	auth	0012_alter_user_first_name_max_length	2024-03-17 08:45:30.962169+00
18	catalogue_items	0001_initial	2024-03-17 08:45:30.974654+00
19	sessions	0001_initial	2024-03-17 08:45:30.999108+00
20	catalogue_items	0002_mosaic_image2	2024-03-19 09:19:53.267296+00
21	catalogue_items	0003_mosaic_image3_mosaic_image4_mosaic_image5	2024-03-19 09:23:16.931053+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: betyaevilya
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
pkub2byd6xl4uslle09sdodafyb7azit	.eJxVjEEOwiAQRe_C2hA6MAIu3fcMZGCoVA0kpV0Z765NutDtf-_9lwi0rSVsPS9hZnERgzj9bpHSI9cd8J3qrcnU6rrMUe6KPGiXY-P8vB7u30GhXr61RWZM4LIHBAfMNBEahZCUVTmi4wTJgtYmWsQJNZ4H7xQa8sYpyuL9AdT5NxQ:1rmVXu:lAD8s9Oy7foc0aL57P1za-OMIA7x0GRRDIIn_NzmdQg	2024-04-02 09:14:10.552735+00
0jv3fm0bcw246onbeg4odnkbfjhqhasr	.eJxVjEEOwiAQRe_C2hA6MAIu3fcMZGCoVA0kpV0Z765NutDtf-_9lwi0rSVsPS9hZnERgzj9bpHSI9cd8J3qrcnU6rrMUe6KPGiXY-P8vB7u30GhXr61RWZM4LIHBAfMNBEahZCUVTmi4wTJgtYmWsQJNZ4H7xQa8sYpyuL9AdT5NxQ:1rmcti:hj-KjEZY32BV2ZPr6KCXCpGTXsqw4y8lncDJa9GFPOA	2024-04-02 17:05:10.354844+00
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 28, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: catalogue_items_mosaic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.catalogue_items_mosaic_id_seq', 8, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 26, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 7, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: betyaevilya
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 21, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: catalogue_items_mosaic catalogue_items_mosaic_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.catalogue_items_mosaic
    ADD CONSTRAINT catalogue_items_mosaic_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: betyaevilya
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: betyaevilya
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--
