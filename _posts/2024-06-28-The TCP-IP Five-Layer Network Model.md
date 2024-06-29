---
date: 2024-06-28 10:00:38 +0800
categories: [Network]
tags: [network, tcp/ip]     # TAG names should always be lowercase
---

#### The TCP/IP five network model

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

 There are lots of different protocols at thislevel; they're application-specificc.





#### Package being delivered

You can think of layers like different aspects of a package being delivered.

 ![062902](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062902.png)

- The physical layer is the delivery truck and the roads. 

- The data link layer is how the delivery trucks get from one intersection to the next over and over.

- The network layer identifies which roads need to be taken to get from address A to Address B.

- The transport layer ensures the delivery driver knows how to knock on your door to tell you your package has arrived.

- The application layer is the contents of the package itself.



Cables: Connect different devices to each other, allowing data to be transmitted over them.

Most network cables used today can be split into two categories:

- copper

Copper cables are the most common form of networking cable.

They're made up of multiple pairs of copper wires inside plastic insulators.

The sending device communicates binary data across these copper wires by changing the voltage between two ranges.

The system at the receiving end is able to interpret these voltage changes as binary ones and zeros, which can then be translated into different forms of data.

The most common forms of copper twisted-pair cables used in networking are **Cat5, Cat5e, and Cat6 cables**.

![062903](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062903.png)

Cat5e cables have mostly replaced those older Cat5 cables because their internals reduce Crosstalk. **Crosstalk **is when an electrical pulse on one wire is accidentally detected on another wire. So the receiving end isn't able to understand the data causing a network error.

- fiber

Fiber cables contain individual optical fibers, which are tiny tubes made out of glass about the width of a human hair.

![062901j](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062901.gif)

