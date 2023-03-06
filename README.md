# Version

This node simply displays the entered version of the flow and sets `msg.version` to this value.

It is intended to visualize the flow's version.

## Nodes

-   version  
    ![version node](/images/version.png)

### Example:

```
[{"id":"d1fc7f2ca2d28e8c","type":"group","z":"b38f670dac5c2381","name":"","style":{"stroke":"#d1d1d1","fill":"#ffff3f","label":true},"nodes":["71a4bb4d33cf9912"],"x":254,"y":199,"w":152,"h":82},{"id":"71a4bb4d33cf9912","type":"version","z":"b38f670dac5c2381","g":"d1fc7f2ca2d28e8c","version":"1.0.0","versionType":"str","versionEnv":"","x":330,"y":240,"wires":[[]]}]
```

# License

[MIT License](LICENSE).
