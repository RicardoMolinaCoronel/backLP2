var express = require('express');
  var router = express.Router();

  /* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
  const like= require('../models').like;
  const { Op } = require("sequelize");
router.get('/findAll/json', function(req, res, next) {  

    	/* MÉTODO ESTÁTICO findAll  */
      //comentario
      like.findAll({  
          attributes: { exclude: ["updatedAt", "createdAt"] } ,
      })  
      .then(resultado => {  
          res.json(resultado);  
      })  
      .catch(error => res.status(400).send(error)) 

    });

    //GET ID
    router.get('/findById/:id/json', function(req, res, next) {  

      let id = req.params.id;

      like.findByPk(id)
          .then(instancia => {
            if(instancia) {
              res.status(200).json(instancia);
            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))
    });
	  
      router.post('/save', function(req, res, next) {  

        like.create(req.body)
          .then(instancia => {
            res.status(201).json(instancia);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al crear el registro' });
          });

      });



router.put('/update/:id', function(req, res, next) {  

        let id = req.params.id;

        like.findByPk(id)
          .then(instancia => {
            if(instancia) {

              instancia.update(req.body)
                .then(instanciaActualizada => {
                  res.status(201).json(instanciaActualizada);
                })
                .catch(error => {
                  res.status(500).json({ error: 'Error al actualizar el registro' });
                });

            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))
		  
      });  
  
  

    module.exports = router;
