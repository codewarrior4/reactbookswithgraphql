const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLID,
    GraphQLInt

} = graphql

var books =[
    {name:'Hello world',genre:'World',id:'1',authorid:'1'},
    {name:'Hello wor',genre:'Wor',id:'2',authorid:'2'},
    {name:'Hello worl',genre:'Worl',id:'3',authorid:'3'}
]

var authors = [
    {name:"Michael",age:30,id:"1"},
    {name:"Mayowa",age:13,id:"2"},
    {name:"Temitope",age:33,id:"3"}
]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent){
                console.log(parent)
                return _.find(authors,{id:parent.authorid})
            }
        }
    }) 
})


const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        
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
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query:RootQuery
})