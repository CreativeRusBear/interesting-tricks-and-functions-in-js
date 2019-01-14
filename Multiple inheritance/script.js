const authorGateway ={
    getAuthors : function() {},
    editAuthor: function() {}
};
const bookGateway ={
    getBooks : function() {},
    editBooks: function() {}
};

//copy with Object.assign()
const assignGateway = Object.assign({}, authorGateway,bookGateway);
console.log(assignGateway);

//copy with spread operator
const spreadGateway= {...authorGateway, ...bookGateway};
console.log(spreadGateway);