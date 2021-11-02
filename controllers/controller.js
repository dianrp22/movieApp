//feat s2
const { ProductionHouse, Movie, Cast, MovieCast } = require("../models");
const helper = require("../helper/helper");
class Controller {
  static findAllProdution(req, res) {
    // res.send('hai')
    ProductionHouse.findAll({
      order: [["name", "ASC"]],
    })
      .then((data) => {
        res.render("productionHouse", { data });
      })

      .catch((err) => {
        res.send(err);
      });
  }

  static findAllMovie(req, res) {
    Movie.findAll({
      order: [["released_year", "DESC"]],
      include: ProductionHouse,
    }).then((data) => {
      res.render("Movie", { data });
    });
  }

  static getAdd(req, res) {
    // res.render('addMovie')
    ProductionHouse.findAll({
      order: [["name", "ASC"]],
    })
      .then((data) => {
        res.render("addMovie", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postAdd(req, res) {
    const input = {
      name: req.body.name,
      released_year: req.body.released_year,
      genre: req.body.genre,
      ProduceHouseId: req.body.ProductionHouse,
    };

    Movie.create(input)
      .then((data) => {
        res.redirect("/movies");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static remove(req, res) {
    const id = +req.params.id;
    Movie.destroy({
      where: { id },
    })
      .then((data) => {
        res.redirect("/movies");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getEdit(req, res) {
    let data1;
    let data2;
    let id = req.params.id;
    Movie.findByPk(id, { include: ProductionHouse })
      .then((data) => {
        data1 = data;
        return ProductionHouse.findAll();
      })

      .then((data) => {
        data2 = data;
        res.render("editMovie", { data1, data2 });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postEdit(req, res) {
    let id = +req.params.id;
    const newUpdate = {
      name: req.body.name,
      released_year: req.body.released_year,
      genre: req.body.genre,
      ProduceHouseId: req.body.ProductionHouse,
    };
    // res.send(newUpdate)

    Movie.update(newUpdate, { where: { id } })
      .then((data) => {
        res.redirect("/movies");
        // res.send(data)
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getCast(req, res) {
    // res.send('hai')
    Cast.findAll()
      .then((data) => {
        res.render("cast", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addCast(req, res) {
    res.render("addCast");
  }

  static postCast(req, res) {
    const input = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      birth_year: req.body.birth_year,
      gender: req.body.gender,
    };

    Cast.create(input)
      .then((data) => {
        res.redirect("/casts");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static removeCast(req, res) {
    let id = +req.params.id;
    Cast.destroy({ where: { id } })
      .then((data) => {
        res.redirect("/casts");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getEditCast(req, res) {
    let id = +req.params.id;
    Cast.findByPk(id)
      .then((data) => {
        res.render("editCast", { data });
      })

      .catch((err) => {
        res.send(err);
      });
  }

  static postEditCast(req, res) {
    let id = +req.params.id;
    const input = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      birth_year: req.body.birth_year,
      gender: req.body.gender,
    };
    Cast.update(input, { where: { id } })
      .then((data) => {
        res.redirect("/casts");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getAddMoviesCast(req, res) {
    let dataMovie;
    let dataCast;

    Movie.findAll({
      where: {
        id: +req.params.id,
      },
      include: Cast,
    })
      .then((data) => {
        dataMovie = data;
        return Cast.findAll();
      })
      .then((data) => {
        dataCast = data;
        res.render("movieAddCast", { dataMovie, dataCast });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static postAddMoviesCast(req, res) {
    let id = req.params.id;
    let body = req.body;
    let object = {
      CastId: body.actor,
      MovieId: id,
      role: body.role,
    };

    MovieCast.create(object)
      .then((data) => {
        res.redirect("/movies");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static listMovie(req, res) {
    //   res.send('hai')
    let id = +req.params.id;
    Cast.findByPk(id, { include: [Movie] })
      .then((data) => {
        //   console.log(data)
        res.render("seeMovie", { data, helper });
        // res.send(data)
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
module.exports = Controller;
