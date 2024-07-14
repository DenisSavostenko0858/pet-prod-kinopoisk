import sequelize from '../database';
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'user'},
});

const Favorite = sequelize.define('favorite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const FavoriteMovie = sequelize.define('favorite_movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0 },
    img: {type: DataTypes.STRING, allowNull: false},
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
});

const MovieInfo = sequelize.define('info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}); 

User.hasOne(Favorite);
Favorite.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Favorite.hasMany(FavoriteMovie);
FavoriteMovie.belongsTo(Favorite);

Type.hasMany(Movie);
Movie.belongsTo(Type);

Brand.hasMany(Movie);
Movie.belongsTo(Brand);

Movie.hasMany(Rating);
Rating.belongsTo(Movie);

Movie.hasMany(FavoriteMovie);
FavoriteMovie.belongsTo(Movie);

Movie.hasMany(MovieInfo);
MovieInfo.belongsTo(Movie);

Type.belongsToMany(Brand, {through: TypeBrand} );
Brand.belongsToMany(Type, {through: TypeBrand} );

export {
    User, 
    Favorite, 
    FavoriteMovie, 
    Movie, 
    Type, 
    Brand, 
    Rating, 
    MovieInfo, 
    TypeBrand
};