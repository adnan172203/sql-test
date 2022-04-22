const Product = require('../models').Product;
const { Op } = require('sequelize');
const { sequelize } = require('../models');

module.exports.getProductDateList = async (req, res) => {
  const { start_date, end_date, status } = req.params;
  let productDateList;

  if (start_date < end_date) {
    productDateList = await Product.findAll({
      attributes: [
        'date',
        'status',
        [sequelize.fn('SUM', sequelize.col('count')), 'count'],
      ],

      group: ['date', 'status'],

      where: {
        date: {
          [Op.gte]: start_date,
          [Op.lte]: end_date,
        },
        status: status,
      },
    });
  }

  if (start_date > end_date) {
    productDateList = await Product.findAll({
      attributes: [
        'date',
        'status',
        [sequelize.fn('SUM', sequelize.col('count')), 'count'],
      ],

      group: ['date', 'status'],

      where: {
        date: {
          [Op.lte]: start_date,
          [Op.gte]: end_date,
        },
        status: status,
      },
    });
  }

  if (productDateList) {
    return res.status(201).json({ data: productDateList });
  }
};
