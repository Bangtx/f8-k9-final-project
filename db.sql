drop table if exists store cascade;
create table if not exists store
(
    id          bigserial,
    name        text,
    location    text,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
    deleted_by  bigint,
    active      boolean DEFAULT TRUE,
    constraint pkey_store primary key (id)
);

drop table if exists vendor cascade;
create table if not exists vendor
(
    id          bigserial,
    name        text,
    location    text,
    email       text,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
    deleted_by  bigint,
    active      boolean DEFAULT TRUE,
    constraint pkey_vendor primary key (id)
);

insert into vendor (name, location, email)
values ('The gioi di dong', 'Ha Noi', 'tgdd@test.com'),
       ('Dien may xanh', 'Ha Noi', 'dmx@test.com');


create table if not exists image (
    id          bigserial,
    path        text,
    url         text,
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
    deleted_by  bigint,
    active      boolean DEFAULT TRUE,
    constraint pkey_image primary key (id)
);


drop table if exists location cascade;
create table if not exists location (
    latitude numeric(3, 10),
    longitude numeric(3, 10),
    driver_id bigint,
    constraint pkey_location primary key (driver_id)
);

create index location_idx on location (latitude, longitude);

create table if not exists material (
    id          bigserial,
    name        text,
    unit_price  numeric(10, 2),
    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    created_by  bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at  timestamp with time zone,
    deleted_by  bigint,
    active      boolean DEFAULT TRUE,
    constraint pkey_material primary key (id)
);


create table if not exists "order"
(
    id             bigserial,
    driver_id      bigint,
    store_id       bigint,
    image_id       bigint,
    status         text, -- pending, processing, picked-up, on-moving, done
    payment_status text, -- unpaid, paid
    total_amount   numeric(10, 2),
    created_at     timestamp with time zone NOT NULL DEFAULT now(),
    created_by     bigint,
    modified_at    timestamp with time zone,
    modified_by    bigint,
    deleted_at     timestamp with time zone,
    deleted_by     bigint,
    active         boolean                           DEFAULT TRUE,
    constraint pkey_order primary key (id)
);

create table if not exists order_detail
(
    id             bigserial,
    order_id       bigint,
    material_id    bigint,
    weight         numeric(10, 2),
    amount         numeric(10, 2),
    created_at     timestamp with time zone NOT NULL DEFAULT now(),
    created_by     bigint,
    modified_at    timestamp with time zone,
    modified_by    bigint,
    deleted_at     timestamp with time zone,
    deleted_by     bigint,
    active         boolean                           DEFAULT TRUE,
    constraint pkey_order_detail primary key (id)
)