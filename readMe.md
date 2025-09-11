# Module - library,js file

Each JS file is module which be default exports an empty object.
Module can return one thing only.

# Packages :- collection of similar modules

Every Folder, location,directory

index is the file of the package

# Types of module

1.  "commonjs"
    -> export - module.exports = "thing"
    -> require("url")
2.  "module"
    -> export default "thing" | named export
    -> import somthing from "file"

# Types of packages:

1.  default -> http
2.  user defined -> done
3.  external

npm -> 1. npm website + 2. npm service + 3. npm cli

# REST API vs API

-> REST API representation state of API so that you can make your program too much readable for your fellow developer.

1. url can't have any verb
2. keep all the function(controllers) in a seperate module in controllers folder
3. use CRUD
   - Create -> post
   - read -> get
   - delete -> delete
   - update -> put[completely] or patch[partially]
4. api/v1/

# Middlewares ->

# Types of Middlewares :

1.  built-in
    -> global
    -> route specific
2.  User Defined
    - 2 parameters -> 1 req, 2. res
    - 3 parameters -> 1. req, 2. res, 3. func

# MONGO-DB : saves in form of binary json object (bson document).

1.  Non-Relation
2.  Collection -> [Database]
3.  Clusters -> [Machine's Mongo Service Provider]
4.  Schema -> [table]
5.  Document -> [row]

# MONGO Community Edition vs Mongo Atlas - done

# MONGO Compass - done

# MONGO Shell - done

# Mongoose vs Prism
