'use strict';

module.exports = function (RED) {
    function versionNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.version = config.version || '';
        node.versionType = config.versionType || 'str';

        node.on('input', function (msg, send, done) {
            let version;
            RED.util.evaluateNodeProperty(node.version, node.versionType, node, msg, (err, value) => {
                if (err) {
                    version = 'version error';
                    done(err);
                } else version = value;
            });

            // node.context().global.set('version', version);
            msg.version = version;

            send(msg);
            done();
        });

        // HTTP-Admin callback to receive the version
        RED.httpAdmin.get('/environ-val/:key', function (req, res) {
            res.json({ value: process.env[req.params.key] });
        });
    }

    RED.nodes.registerType('version', versionNode);
};
