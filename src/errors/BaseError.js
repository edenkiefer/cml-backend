class BaseError extends Error {
  constructor(messages = "Erro interno do servidor", status=500) {
    super();
    this.messages = messages;
    this.status = status;
  }

  sendResponse(res) {
    res.status(this.status).send({
      messages: this.messages,
      status: this.status
    });
  }
}

export default BaseError