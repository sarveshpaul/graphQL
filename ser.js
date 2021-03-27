/*const graphql = require('graphql');
const user = require('./models').user;

const { GraphQLObjectType,
    GraphQLString,
    buildSchema,
    GraphQLSchema,
    GraphQLInt
} = graphql;


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        uid: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
        bookings: {
            type: BookingType
        }
    })
});


const CabType = new GraphQLObjectType({
    name: 'Cab',
    fields: () => ({
        cid: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })

});


const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: () => ({
        bid: { type: GraphQLString },
        uid: { type: GraphQLString },
        cid: { type: GraphQLString },
        from: { type: GraphQLString },
        to: { type: GraphQLInt }
    })

});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                uid: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                return args.id;
                //code to get user data from db
            }
        },

        Cab: {
            type: CabType,
            args: {
                cid: { type: GraphQLString }
            },
            resolve: (parent, args)=> {
                return args.cid;
                //code for getting all the cabs
            }

        },

        Booking: {
            type: BookingType,
            args: {
                uid: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                return args.uid;
                //code for getting all the bookings by user with id
            }
        }
    })

});





const Mutation = new GraphQLObjectType({

    name: 'Mutation',
    fields: ()=>({
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
            },

            resolve(parent, args) {

                let user = new user({
                    name: args.name,
                    email: args.email
                });

                return user.create();
                //add user code db
            }
        }
    })
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});












































 var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
        
    type UserType {
        fields: () => ({
            uid: { type: GraphQLString },
            name: { type: GraphQLString },
            age: { type: GraphQLString },
            bookings: {
                type: BookingType          
            }
        })
    }


    type CabType {
        fields: () => ({
            cid: { type: GraphQLString },
            name: { type: GraphQLString },
            age: { type: GraphQLString }           
        })
    }

    
    type BookingType {
        fields: ()=>({
            bid: { type: GraphQLString },
            uid: { type: GraphQLString },
            cid: { type: GraphQLString },
            from: { type: GraphQLString },
            to: { type: GraphQLInt }
        })
    }



  type RootQuery {

        fields: {
            user: {
                type : UserType,
                args:{
                    uid: {type: GraphQLString} 
                   }
              }

            Cab: {
                type: CabType,
                args: {
                    cid: { type: GraphQLString }
                }

            Booking: {
                type: BookingType,
                args: {
                     uid: { type: GraphQLString }
                }
            }

        }

type RootMutation {

        fields: {

            addUser: {
                type: UserType,
                args: {
                    name: { type: GraphQLString },
                    email: { type: GraphQLString },
                }
            }

        }
    }


schema {
    query: RootQuery,
    mutation: RootMutation
}


`);








module.exports = schema;







var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    //rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));



*/










/*

const express = require('express');
const graphQL = require('express-graphql');
const schema = require('./schema');

const app = express();


app.use('/graphql', graphQL({
    schema

}));



app.listen(5000, () => console.log('Server Running');


*/