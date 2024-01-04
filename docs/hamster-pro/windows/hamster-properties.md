---
title: Hamster Properties
---

## Hamster Properties Configuration

After a successful installation, the Hamster properties file will be located at `C:\Users\<user_name>\AppData\Local\Programs\QAInsights\Hamster\hamster_app.properties`.

By default, the `hamster_app.properties` file contains the following configuration for JMeter:

```toml
[JMETER]
home = C:\Tools\apache-jmeter-5.6.2
```

If you want to change the JMeter version, you can make the changes in here and restart the Hamster to reflect the changes.

## Pro Features

Pro users can add additional JMeter commands which will be added while launching the JMeter test plan. The following properties can be added to the test plan during the launch:

```toml
[JMETER]
home = C:\Tools\apache-jmeter-5.6.2
q = C:\Tools\apache-jmeter-5.6.2\bin\user.properties

[TELEMETRY]
enabled = true
```

To add multiple properties, add each property using comma separated value e.g.

```toml
[JMETER]
home = C:\Tools\apache-jmeter-5.6.2
q = C:\Tools\apache-jmeter-5.6.2\bin\user.properties, C:\Tools\apache-jmeter-5.6.2\bin\local.properties
H = company.proxy.com
P = 8083
E = https

[TELEMETRY]
enabled = true
```

> ⚠️ Do not add `-` to the JMeter arguments.  
> ⚠️ Make sure that you enter the absolute path of property file.  


> ✨ Here is the [list](https://jmeter.apache.org/usermanual/get-started.html) of supported JMeter arguments.
