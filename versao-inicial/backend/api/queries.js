module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS 
        ( select id from categories where id = ?
        UNION ALL
        SELECT c.id from subcategories, categories c
            where "parentId" = subcategories.id 
            )
        SELECT id from subcategories
    `
}
