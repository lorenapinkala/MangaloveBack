const User=require('./User');
const Favourites=require('./Favourites');


User.belongsToMany(Favourites,{as:'usersfav',through:'user_fav'});

Favourites.belongsToMany(User,{as:'usersfav',through:'user_fav'});


module.exports ={User,Favourites}