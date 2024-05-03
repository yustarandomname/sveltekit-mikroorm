'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20240503190202 extends Migration {

  async up() {
    this.addSql('alter table "Course" drop constraint "Course_programId_fkey";');

    this.addSql('alter table "_ProgramToUser" drop constraint "_ProgramToUser_A_fkey";');

    this.addSql('alter table "_ProgramToUser" drop constraint "_ProgramToUser_B_fkey";');

    this.addSql('create table "post" ("id" varchar(255) not null, "title" varchar(255) not null, "body" varchar(255) not null, constraint "post_pkey" primary key ("id"));');

    this.addSql('drop table if exists "Course" cascade;');

    this.addSql('drop table if exists "Program" cascade;');

    this.addSql('drop table if exists "User" cascade;');

    this.addSql('drop table if exists "_ProgramToUser" cascade;');
  }

  async down() {
    this.addSql('create table "Course" ("id" serial primary key, "code" text not null default null, "name" text not null default null, "description" text null default null, "type" CourseType not null default \'COURSE\', "programId" int4 not null default null, "createdAt" timestamp(3) not null default CURRENT_TIMESTAMP, "updatedAt" timestamp(3) not null default null);');

    this.addSql('create table "Program" ("id" serial primary key, "name" text not null default null, "description" text null default null, "createdAt" timestamp(3) not null default CURRENT_TIMESTAMP, "updatedAt" timestamp(3) not null default null);');

    this.addSql('create table "User" ("id" serial primary key, "netid" text not null default null, "first_name" text not null default null, "last_name" text not null default null, "role" UserRole not null default \'USER\', "createdAt" timestamp(3) not null default CURRENT_TIMESTAMP, "email" text null default null);');
    this.addSql('alter table "User" add constraint "User_netid_key" unique ("netid");');

    this.addSql('create table "_ProgramToUser" ("A" int4 not null default null, "B" int4 not null default null);');
    this.addSql('alter table "_ProgramToUser" add constraint "_ProgramToUser_AB_unique" unique ("A", "B");');
    this.addSql('create index "_ProgramToUser_B_index" on "_ProgramToUser" ("B");');

    this.addSql('alter table "Course" add constraint "Course_programId_fkey" foreign key ("programId") references "Program" ("id") on update cascade on delete restrict;');

    this.addSql('alter table "_ProgramToUser" add constraint "_ProgramToUser_A_fkey" foreign key ("A") references "Program" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "_ProgramToUser" add constraint "_ProgramToUser_B_fkey" foreign key ("B") references "User" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "post" cascade;');
  }

}
exports.Migration20240503190202 = Migration20240503190202;
