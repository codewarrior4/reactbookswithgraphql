const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID} = graphql

var books =[
    {name:'Hello world',genre:'World',id:'1'},
    {name:'Hello wor',genre:'Wor',id:'2'},
    {name:'Hello worl',genre:'Worl',id:'3'}
]


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
    })
})


const RootQuery = new GraphQLObjectType({
    name :'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(books,{id:args.id})
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query:RootQuery
})