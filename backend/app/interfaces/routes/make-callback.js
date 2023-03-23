export default (controller) => async (req, res) => {
  try {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      user: req.user,
      logger: req.logger,
      source: {
        ip: req.ip,
        browser: req.get('User-Agent')
      },
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    };

    const httpResponse = await controller(httpRequest);

    res.set('Content-Type', 'application/json');
    res.type('json');
    const body = {
      success: true,
      code: 200,
      data: httpResponse
    };
    res.status(200).send(body);
  } catch (e) {
    res.status(400).send({
      success: false,
      code: 400,
      error: {
        description: e.message
      }
    });
  }
};
