const graphql  = require('graphql');
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
            type: BookingType,
            resolve(parent, args) {
                // code getting bookings of that user
            }
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
    fields: {
        user: {
            type: UserType,
            args: {
                uid: { type: GraphQLString }
            },
            resolve(parent, args) {
                //code to get user data from db
            }
        },

        Cab: {
            type: CabType,
            args: {
                cid: { type: GraphQLString }
            },
            resolve(parent, args) {

                //code for getting all the cabs

            }

        },

        Booking: {
            type: BookingType,
            args: {
                uid: { type: GraphQLString }
            },
            resolve(parent, args) {

                //code for getting all the bookings by user with id

            }
        }
    }

});





const Mutation = new GraphQLObjectType({

    name: 'Mutation',
    fields: {
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
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

  