# Version

This node simply displays the entered version of the flow and sets `msg.version` to this value.

It is intended to visualize the flow's version.

## Nodes

-   version  
    ![version node](/images/version.png)

### Example:

```
[{"id":"f624d2d35c879d28","type":"group","z":"4deb3ee328afd338","name":"","style":{"stroke":"#d1d1d1","fill":"#ffff3f","label":true},"nodes":["a2c6f9f3dc4871f6"],"x":294,"y":99,"w":152,"h":82},{"id":"a2c6f9f3dc4871f6","type":"ba47-version","z":"4deb3ee328afd338","g":"f624d2d35c879d28","version":"1.0.0","versionType":"str","versionEnv":"","x":370,"y":140,"wires":[[]]}]
```

# License

[MIT License](LICENSE).
