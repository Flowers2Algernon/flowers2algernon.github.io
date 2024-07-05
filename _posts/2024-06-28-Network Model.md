---
date: 2024-06-28 10:00:38 +0800
categories: [Network]
tags: [network, tcp/ip]     # TAG names should always be lowercase
---

### The TCP/IP five network model

|      |    Layer    |      Protocal      |     Content     |   Address   |
| :--: | :---------: | :----------------: | :-------------: | :---------: |
|  5   | Application | HTTP, SMTP, etc... |     Message     |     n/a     |
|  4   |  Transport  |      TCP/UDP       |     Segment     |  Port #'s   |
|  3   |   Network   |         IP         | Packet/Datagram | IP Address  |
|  2   |  Data Link  |  Ethernet, Wi-Fi   |     Frames      | MAC address |
|  1   |  Physical   |        n/a         |      Bits       |     n/a     |

#### Physical layer

Define: Represents the physical devices that interconnect computers

![062901](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062901.png)

 The physical layer consists of devices and means of transmitting bits across computer networks.

A bit is the smallest representation of data that a computer can understand. It's zero or one.

These ones and zeros sense across networks at the lowest level are what make up the frames and packets of data that we'll learn about when we cover the other layers.

##### Modulation

Ones and zeros are sent across those network cables through a process called modulation.

Modulation is a way of varying the voltage of this charge moving across the cable. When used for computer networks, this kind of modulation is more specifically known as line coding.

![070501](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/070501.png)

It allows devices on either end of a link to understand that an electrical charge in a certain state is a zero and another state is one.

Through this seemingly simple technique, modern networks are capable of moving 10 billion ones and zeros across a single network cable every second.

##### Twisted pair cabling and duplexing

- Twisted pair cabling is the most common type for connecting computing devices.
- It consists of pairs of copper wires twisted together to protect against interference.
- These cables allow for duplex communication, meaning information can flow in both directions.
- Full duplex allows devices to communicate simultaneously in both directions.

![070502](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/070502.png)

- Half-duplex means communication is possible in both directions, but only one device can communicate at a time.







#### Data link layer

Define: Responsible for defining a common way of interpreting these signals so network devices can communicate.

The **Ethernet** standards also define a protocol responsible for getting data to nodes on the same network or link.





#### Network layer

Define: Allows different networks to communicate with each other through devices known as routers.

A collection of networks connected together through routers, the most famous of these being the internet.

IP is the heart of the internet and most smaller networks worldwide.



#### Transport layer

Sorts out which client and server programs are supposed to get that data.



#### Application

 There are lots of different protocols at this level; they're application-specific.





#### Package being delivered

You can think of layers like different aspects of a package being delivered.

 ![062902](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062902.png)

- The physical layer is the delivery truck and the roads. 

- The data link layer is how the delivery trucks get from one intersection to the next over and over.

- The network layer identifies which roads need to be taken to get from address A to Address B.

- The transport layer ensures the delivery driver knows how to knock on your door to tell you your package has arrived.

- The application layer is the contents of the package itself.

### Transport

Cables: Connect different devices to each other, allowing data to be transmitted over them.

Most network cables used today can be split into two categories:

- ###### copper

Copper cables are the most common form of networking cable.

They're made up of multiple pairs of copper wires inside plastic insulators.

The sending device communicates binary data across these copper wires by changing the voltage between two ranges.

The system at the receiving end is able to interpret these voltage changes as binary ones and zeros, which can then be translated into different forms of data.

The most common forms of copper twisted-pair cables used in networking are **Cat5, Cat5e, and Cat6 cables**.

![062903](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062903.png)

Cat5e cables have mostly replaced those older Cat5 cables because their internals reduce Crosstalk. **Crosstalk **is when an electrical pulse on one wire is accidentally detected on another wire. So the receiving end can't understand the data causing a network error.

- ###### fiber

![062904](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062904.jpg)

Fibre cables contain individual optical fibres, which are tiny tubes made out of glass about the width of human hair.

![062901j](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062901.gif)

Unlike copper, which uses electrical voltages, fiber cables use pulses of light to represent the ones and zeros of the underlying data.

Fiber cables can generally transport data quicker than copper cables can, but they're much more expensive and fragile.

FIber can also transport data over much longer distances than copper can without suffering potential data loss.

#### Hub

A hub is a physical layer device allowing for connections from many computers simultaneously.

![062902j](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062902.gif)

All the devices connected to a hub will end up talking to all other devices at the same time. 

It's up to each system connected to the hub to determine if the incoming data was meant for them or to ignore it if it isn't. This causes a lot of noise on the network and creates what's called a collision domain.

![062905](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062905.png)

A collision domain is a network segment where only one device can communicate at a time.

#### Network switch

Since the hub is really slowing down network communications and is the primary reason hubs are rare. A much more common way of connecting many computers is with a more sophisticated device known as a network switch.

A switch is very similar to a hub since you can connect many devices to it so they can communicate.

The **difference** is that while a hub is a layer one or physical layer device, a switch is a layer two or data link device.

![062903j](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062903.gif) 

This means that a switch can inspect the contents of the ethernet protocol data being sent around the network, determine which system the data is intended for and then only send that data to that one system.

This reduces or even completely eliminates the size of collision domains on a network.

#### Routers

Hubs and switches are the primary devices used to connect computers on a single network, usually referred to as a LAN or a Local Area Network. But we often want to send or receive data to computers on other networks. This is where routers come into play.

**A router is a device that knows how to forward data between independent networks.** 

- A hub is a layer one device, and a switch is a layer two device.
- A router operates at layer three, a network layer.

Just like a switch can inspect Ethernet data to determine where to send things, a router can inspect IP data to determine where to send things. Routers store internal tables containing information about how to route traffic between lots of different networks all over the world.

![062906](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062906.png)

A core router usually has many different connections to many other routers. **Routers share data with each other via a protocol known as BGP or Border Gateway Protocol. That lets them learn about the most optimal paths to forward traffic.**

The internet is incredibly large and complicated, and routers are global guides for getting traffic to the right places.

#### Severs and Clients

![062904j](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062904.gif) 

A server is something that provides data to something requesting that data.

The thing receiving the data is referred to as a client.

