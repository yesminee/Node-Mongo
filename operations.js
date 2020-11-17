const assert = require("assert");

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  return coll.insert(document);
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
  return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  return coll.updateOne(document, { $set: update }, null);
};

//insertDocument, findDocuments, removeDocument, updateDocument are functions we create  and its we that can fix nb of params
/* 

 { $set: update }: indicates which field should be updated
  
 
 ******* params interpretaion *******

   *document  : the document i want to insert, remove , update
   *collection : the collection in which i want make operations
   * callback : function : will be called back once the op is finished
   * update : the update 
*/