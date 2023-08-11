# Comandos MongoDB con `mongosh`

## Conexión
- **Conectar a MongoDB**: `mongosh`
- **Conectar a una base de datos**: `mongosh <nombre de la base de datos>`

## Manejo de Bases de Datos
- **Mostrar bases de datos**: `show dbs`
- **Usar una base de datos**: `use <nombre de la base de datos>`
- **Borrar base de datos**: `db.dropDatabase()`

## Manejo de Colecciones
- **Mostrar colecciones**: `show collections`
- **Crear colección**: `db.createCollection("<nombre de la colección>")`
- **Borrar colección**: `db.<nombre de la colección>.drop()`

## CRUD
- **Insertar documento**: `db.<nombre de la colección>.insertOne(<documento>)`
- **Insertar varios documentos**: `db.<nombre de la colección>.insertMany([<doc1>, <doc2>, ...])`
- **Encontrar documento(s)**: `db.<nombre de la colección>.find(<criterio>)`
- **Encontrar un documento**: `db.<nombre de la colección>.findOne(<criterio>)`
- **Actualizar un documento**: `db.<nombre de la colección>.updateOne(<criterio>, <update>)`
- **Actualizar varios documentos**: `db.<nombre de la colección>.updateMany(<criterio>, <update>)`
- **Borrar un documento**: `db.<nombre de la colección>.deleteOne(<criterio>)`
- **Borrar varios documentos**: `db.<nombre de la colección>.deleteMany(<criterio>)`

## Índices
- **Crear índice**: `db.<nombre de la colección>.createIndex(<campos>)`
- **Ver índices**: `db.<nombre de la colección>.getIndexes()`
- **Borrar índice**: `db.<nombre de la colección>.dropIndex(<nombre índice>)`

## Ayuda y Otros
- **Ayuda general**: `help`
- **Ayuda para colecciones**: `db.<nombre de la colección>.help()`
