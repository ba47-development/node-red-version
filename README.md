# Version

This node simply displays the entered version in the flow and sets `msg.version` to this value.

It is intended to visualize the flow's version.

## Nodes

-   version     
    ![version node](/images/version.png)

## Example:

```
[{"id":"742dd9932f8f885d","type":"group","z":"67f08dbd3ee93df0","name":"","style":{"stroke":"#d1d1d1","fill":"#ffff3f","label":true},"nodes":["0bafe7366f22cc96"],"x":434,"y":239,"w":152,"h":82},{"id":"0bafe7366f22cc96","type":"ba47-version","z":"67f08dbd3ee93df0","g":"742dd9932f8f885d","version":"1.0.0","versionType":"str","versionCalc":"","x":510,"y":280,"wires":[[]]}]
```

## Known Issues

When changing the value of the version field, it must be saved twice. Looks like an event issue that may be solved at a later stage.
