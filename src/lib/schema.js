import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 256 }),
    created_at: timestamp('created_at').defaultNow(),
});

export const bookmarks = pgTable('bookmarks', {
    id: serial('id').primaryKey(),
    user_id: integer('user_id').references(() => users.id),
    summary: varchar('summary', { length: 256 }),
    url: varchar('url', { length: 256 }),
    title: varchar('title', { length: 256 }),
    image: varchar('image', { length: 256 }),
});

export const preference = pgTable('preference', {
    id: serial('id').primaryKey(),
    user_id: integer('user_id').references(() => users.id),
    q: varchar('q', { length: 256 }),
});