var express = require('express');
  var router = express.Router();

  /* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
  const publicacion = require('../models').publicacion;
  const { Op } = require("sequelize");
router.get('/findAll/json', function(req, res, next) {  

    	/* MÉTODO ESTÁTICO findAll  */

      publicacion.findAll({  
          
      })  
      .then(resultado => {  
          res.json(resultado);  
      })  
      .catch(error => res.status(400).send(error)) 

    });
 router.get('/findById/:id/json', function(req, res, next) {  

      let id = req.params.id;

      publicacion.findByPk(id)
          .then(instancia => {
            if(instancia) {
              res.status(200).json(instancia);
            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))
    });
    router.get('/findAllByDate/:date/json', function(req, res, next) {  

    	/* MÉTODO ESTÁTICO findAll  */
      let date= req.params.date;
      publicacion.findAll({  
        
          
          where: {
           fechacreacion:{
            [Op.between]:[date+" 00:00:00",date+" 23:59:59"]
           }
          }
      })  
      .then(resultado => {  
          res.json(resultado);  
      })  
      .catch(error => res.status(400).send(error)) 

    });	
      router.post('/save', function(req, res, next) {  

        publicacion.create(req.body)
          .then(instancia => {
            res.status(201).json(instancia);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al crear el registro' });
          });

      });
router.put('/update/:id', function(req, res, next) {  

        let id = req.params.id;

        publicacion.findByPk(id)
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
