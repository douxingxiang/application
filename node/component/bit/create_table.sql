#!/usr/bin/sh

set -x

mysql -uroot -p -e "
create table if not exists development.bit(
	uid int(4) unsigned not null,
	type int(4) unsigned not null,
	value int(4) unsigned not null default 0,
	primary key(uid, type)
)engine=innodb, default charset=utf8;
"
