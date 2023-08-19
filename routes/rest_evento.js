var express = require('express');
  var router = express.Router();

  /* IMPORTE El ARCHIVO CON EL NOMBRE_CLASE */
  const evento = require('../models').evento;
router.get('/findAll/json', function(req, res, next) {  

    	/* MÉTODO ESTÁTICO findAll  */

      evento.findAll({  
          attributes: { exclude: ["updatedAt", "createdAt"] } ,
      })  
      .then(resultado => {  
          res.json(resultado);  
      })  
      .catch(error => res.status(400).send(error)) 

    });


	  router.get('/findById/:id/json', function(req, res, next) {  
      let id = req.params.id;
      evento.findByPk(id)
          .then(instancia => {
            if(instancia) {
              res.status(200).json(instancia);
            } else {
              res.status(404).json({error: "No existe registro con el identificador "+id})
            }
          })
          .catch(error => res.status(400).send(error))
    });	


    router.get('/findByDate/:date/json', function(req, res, next) {
      let date = req.params.date;
           
      evento.findAll({
        where: {
          fecha: date // Filtrar por la fecha proporcionada en la URL
        }
      })
      .then(eventos => {
        if (eventos.length > 0) {
          res.status(200).json(eventos);
        } else {
          res.status(404).json({ error: "No existen eventos para la fecha " + date });
        }
      })
      .catch(error => res.status(400).send(error));
    });

    
    router.get('/findByDateRange/:startDate/:endDate/json', function(req, res, next) {
      let startDate = req.params.startDate;
      let endDate = req.params.endDate;
      
      evento.findAll({
        where: {
          fecha: {
            [Op.between]: [startDate, endDate]
          }
        }
      })
      .then(eventos => {
        if (eventos.length > 0) {
          res.status(200).json(eventos);
        } else {
          res.status(404).json({ error: "No existen eventos en el rango de fechas proporcionado" });
        }
      })
      .catch(error => res.status(400).send(error));
    });


    router.get('/findByLocation/:location/json', function(req, res, next) {
      let location = req.params.location;

      evento.findAll({
        where: {
          ubicacion: location
        }
      })
      .then(eventos => {
        if (eventos.length > 0) {
          res.status(200).json(eventos);
        } else {
          res.status(404).json({ error: "No existen eventos en la ubicación proporcionada" });
        }
      })
      .catch(error => res.status(400).send(error));
    });


      router.post('/save', function(req, res, next) {  
        evento.create(req.body)
          .then(instancia => {
            res.status(201).json(instancia);
          })
          .catch(error => {
            res.status(500).json({ error: 'Error al crear el registro' });
          });
      });


router.put('/update/:id', function(req, res, next) {  
        let id = req.params.id;
        evento.findByPk(id)
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

