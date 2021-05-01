const penjualangalonModel = require('../model/Penjualangalon')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    penjualangalonModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Galon Baru'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Galon Baru'
      }))
  })
//menampilkan data seluruh galon (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        penjualangalonModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Galon',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Galon',
            data: []
        }))
    })
// menampilkan data galon dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        penjualangalonModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Galon',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Galon',
      data: null
  }))
})
// update data galon dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    penjualangalonModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Galon'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Galon'
    }))
})
//menghapus data galon dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    penjualangalonModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Galon'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Galon'
  }))
})
