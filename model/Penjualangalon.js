const mongoose = require('mongoose')
const Schema = mongoose.Schema

const penjualangalonSchema = new Schema({
  namalengkap: {
    type: String
  },
  kodebarang: {
    type: Number
  },
  namabarang: {
    type: String
  },
  alamat: {
    type: String
  },
  jenisbarang: {
    type: String
  },
  tanggalproduksi: {
    type: Number
 
  }

})
module.exports = mongoose.model('penjualangalon', penjualangalonSchema)