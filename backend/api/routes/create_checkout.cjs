const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


const orderFilePath = path.join("C:/Malbec/Archivos/Pedidos", 'GO_STCFIN1.txt'); // Update with the folder path

// Endpoint for order checkout
router.post('/checkout', (req, res) => {
  const orderData = req.body; // Order data from the frontend

  // Format the order data into a string (you can customize this)
  const orderString = orderData
    .map((product) => `${product.PD_cod_raz_soc },${product.PD_cod_suc },${product.PD_cod_pro },${product.PD_pre_ven},${product.quantity};`)
    .join('\n') + '\n';

  // Check if the file exists, and if not, create it and append the order
  fs.appendFile(orderFilePath, orderString, (err) => {
    if (err) {
      console.error('Failed to write order to file:', err);
      return res.status(500).send('Failed to save order');
    }

    console.log('Order saved successfully!');
    res.send('Order dispatched and saved');
  });
});

module.exports = router