create table contact_messages (
    id serial 
    nom varchar(25  ) not null,
    prenom varchar(25) not null,
    email varchar(50) not null,
    telephone varchar(11) not null,
    entreprise varchar(25) not null,
    services varchar(25) not null,
    message varchar(1000) not null,
    created_at timestamp not null default now()

    constraint contact_messages_pk primary key (id)
);