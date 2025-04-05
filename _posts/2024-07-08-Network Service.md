---
date: 2024-07-08 07:00:38 +0800
categories: [Network]
tags: [network]     # TAG names should always be lowercase
---

### Name Resolution

### Domain name system (DNS)

DNS is a global and highly distributed network service that resolves strings of letters into IP addresses for you.

> Let's say you wanted to check a weather website to see what the temperature is going to be like. 
>
> It's much easier to type www.weather.com into a web browser than it is to remember that one of the IP addresses for this site is 184.29.131.121. 

##### Domain name

A domain name is the term we use for something that can be resolved by DNS.

Not only does DNS make it easier for humans to remember how to get to a website, it also lets administrative changes happen behind the scenes without an end-user having to change their behaviour. 

##### DNS Basics

- DNS converts human-readable domain names into IP addresses.
- Example: It translate "www.example.com" into an IP address like "192.168.1.1"

##### Name Resolution

- Process: The act of converting a domain name into an IP address is known as name resolution.
- Importance: Without DNS, users would need to remember complex numerical IP addresses instead of simple domain names.

##### Network Configuration

- Essential Components: For a computer to operate on a modern network, four key configurations are needed:
  - MAC address: A hard-coded identifier for network interfaces.
  - IP address: The unique address assigned to the device on the network.
  - Subnet Mask: Defines the network segment and helps in routing.
  - Gateway: The device that routes traffic from the local network to another network.
  - DNS Server: The server translates domain names into IP addresses.

##### Type of DNS Servers

- Five Primary Types:
  - Caching Name Servers: Store previously resolved domain names to speed up future queries.
  - Recursive Name Servers: Perform full DNS resolution requests on behalf of clients.
  - Root Name Servers: The top-level servers in the DNS hierarchy that direct queries to TLD servers.
  - TLD Name Servers: Handle queries for specific top-level domains(like .com).
  - Authoritative Name Servers: Provide the final answer for a specific domain name.

##### Time to Live (TTL)

- **Definition**: TTL is a value that specifies how long a DNS record can be cached before it must be refreshed.
- **Impact**: A long TTL means changes to DNS records take longer to propagate across the internet. Modern TTLs are often shorter (minutes to hours) due to increased internet speed.

### Name Resolution in Practice

##### A record

Used to point a certain domain name at a certain IPv4 IP address.

##### Round robin

A concept that involves iterating over a list of items one by one in an orderly fashion.

##### Service record

Used to define the location of various specific services.

##### Text record

Originally intended to be used only for associating some descriptive text with a domain name for human consumption.

##### Top level domain(TLD)

The last part of a domain name. Such as .com or .net ...

##### Domains

Used to demarcate where control moves from a TLD name server to an authoritative name server. Such as www.google.com, the `google` here is the domain.

##### Fully qualified domain name

When you combine all of these parts together you have what's known as this.

##### DNS zone

Allow for easier control over multiple levels of a domain.

##### Zone files

Simple configuration files that declare all resource records for a particular zone.

##### NS records

Indicate other name services that might also be responsible for this zone.

### DHCP

Full name: Dynamic host configuration protocol

Meaning: An application layer protocol that automates the configuration process of hosts on a network.

Specific: DHCP is a network management protocol that automates the assignment of IP addresses and other network configuration parameters to devices on a network. It operates using a client-server model and is crucial for simplifying network management, especially in environments with numerous devices.

![081101](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/081101.png)

##### Dynamic allocation

A range of IP addresses is set aside of client devices and one of these IPs is issued to these devices when they request one.

Under a dynamic allocation, the IP of a computer could be different almost every time it connects to the network. 

##### Automatic allocation

A range of IP addresses is set aside for assignment purpose.

Automatic allocation is very similar to dynamic allocation in that a range of IP addresses is set aside for assignment purposes. 

The main difference here is that the DHCP server is asked to keep track of which IPs it's assigned to certain devices in the past. Using this information, the DHCP server will assign the same IP to the same machine each time if possible. 

##### Fixed allocation

Requires a manually specified list of MAC address and their corresponding IPs.

When a computer requests an IP, the DHCP server looks for its MAC address in a table and assigns the IP that corresponds to that MAC address. 

If the MAC address isn't found, the DHCP server might fall back to automatic or dynamic allocation, or it might refuse to assign an IP altogether. 

This can be used as a security measure to ensure that only devices that have had their MAC address specifically configured at the DHCP server will ever be able to obtain an IP and communicate on the network. 

#### DHCP in Action

##### DHCP discovery

The process by which a client configured to use DHCP attempts to get network configuration information.

The DHCP discovery process has four steps. 

- Server Discovery

  The DHCP client sends a **DHCP Discover** message as a broadcast to the network. Since the client does not yet have an IP address, this message is sent from the source IP address of 0.0.0.0 to the broadcast address 255.255.255.255, using UDP port 68 for the source and UDP port 67 for the destination.

- IP Lease Offer

  Upon receiving the DHCP Discover message, any DHCP server on the network responds with a **DHCP Offer** message. This message includes an available IP address for the client, along with other configuration details such as the subnet mask and default gateway. The DHCP Offer is also sent as a broadcast, allowing the client to recognize it by its MAC address.

- IP Lease Request

  The client selects one of the received DHCP Offers (if multiple are present) and responds with a **DHCP Request** message, indicating its acceptance of the offered IP address. This message is again broadcast to inform all DHCP servers of the client's choice.

- IP Lease Acknowledgement

  The DHCP server that sent the accepted offer responds with a **DHCP ACK** (Acknowledgement) message, confirming the lease of the IP address to the client. This message includes the lease duration and any additional configuration information.

Key concept:

- Lease Duration: The IP address assigned to the client is valid for a specific period, known as the lease time. Clients must renew their leases before expiration to retain their IP addresses.
- Release of IP Address: Clients can voluntarily release their assigned IP address back to the DHCP server when they disconnect from the network, allowing the server to reallocate the address.
- Dynamic Allocation Methods: DHCP can allocate IP addresses dynamically, automatically, or manually, depending on the configuration of the DHCP server.

### NAT

Network Address Translation (NAT) is a technique used in networking to modify IP address information in IP packet headers while they are in transit across a traffic routing device. Unlike defined protocols such as DNS and DHCP, NAT is not a standard but rather a method that can vary in implementation across different operating systems and network hardware.

Definition: NAT allows a gateway (typically a router or firewall) to translate one IP address into another. This is often used for security purposes and to conserve the limit IPv4 address space.

###### Basic Functionality

- NAT rewrites the source IP address of outgoing packets while retaining the original address for response packets.
- For example, if Computer 1 (10.1.1.100) on Network A communicates with Computer 2 (192.168.1.100) on Network B, the router performs NAT by changing the source IP of packets from Computer 1 to its own IP on Network B (192.168.1.1).

###### Example Scenario

In the provided example, the router between Network A and Network B translates the source IP of outgoing packets from Computer 1 to its own IP on Network B. When Computer 2 responds, the router recognizes the intended recipient (Computer 1) and rewrites the destination IP accordingly, maintaining the privacy of Computer 1's address.

![081102](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/081102.png)

###### IP Masquerading

- This process of hiding the original IP address (Computer 1's IP) from the receiving computer (Computer 2) is known as IP masquerading.
- It enhances security by preventing external entities from directly accessing the internal network devices.

###### One-to-Many NAT

NAT can facilitate a one-to-many relationship where multiple internal devices share a single public IP address. This is commonly seen in local area networks(LANs)

#### NAT at the Transport Layer

While Network Address Translation (NAT) operates primarily at the network layer by translating IP addresses, it also involves the transport layer to ensure proper functionality, especially in one-to-many NAT scenarios.

##### Port Preservation

In one-to-many NAT, where multiple internal devices share a single public IP address, the router uses port preservation to map return traffic to the correct destination. The router keeps track of the source port chosen by the client and uses that same port when translating the outbound traffic. When return traffic arrives at the router on that specific port, it knows to forward the traffic back to the original internal IP address.

##### Port Forwarding

Port forwarding is a technique that allows specific destination ports to be configured to always be delivered to particular internal nodes. This enables complete IP masquerading while still allowing services to respond to incoming traffic. For example, traffic directed at port 80 (HTTP) on the router's external IP address can be automatically forwarded to an internal web server, with the source IP rewritten to appear as the router's external IP. This simplifies external access to multiple internal services running on different servers.

###### Advantages of Port Forwarding

- Allows IP masquerading while still enabling services to receive incoming traffic.
- Simplifies external access to multiple internal services by mapping them to different ports on the router's external IP address.

### VPN

Virtual Private Networks (VPNs) are essential technologies that enable secure access to private networks over public networks, such as the Internet. They are particularly useful for businesses that need to protect proprietary information and provide remote access to employees who are not physically present in the office.

###### Purpose of VPNS

VPNs allow remote users to access internal resources securely, extending a private network to users outside the local area network(LAN).

###### Tunneling Protocol

VPNs create a secure "tunnel" for data transmission, encapsulating the original data packets within an encrypted payload. This ensures that sensitve information remains private as it traverses the public network.

### Proxy Service

A proxy service is a server that acts on behalf of a client to access another service, functioning as an intermediary between clients and servers. Proxies provide various benefits, including anonymity, security, content filtering, and improved performance. They can exist at almost every layer of the networking model and come in various forms.

###### Definition of a Proxy

A proxy server facilitates requests from clients to other servers, providing additional functionality such as security and content management.

##### Types of Proxies

- **Web Proxies**: Specifically designed for web traffic, these proxies can cache web pages to improve performance. However, their use has declined due to faster internet speeds and the dynamic nature of modern web content. Today, web proxies are often used to enforce content restrictions, such as blocking access to certain websites during work hours.
- **Reverse Proxies**: These appear as a single server to clients but actually represent multiple backend servers. They are commonly used for load balancing, distributing incoming requests across several servers to manage high traffic volumes effectively. Reverse proxies can also handle encryption and decryption tasks, offloading this resource-intensive work from the web servers.

##### Load Balancing

Reverse proxies can distribute traffic among multiple servers, similar to DNS round robin, ensuring that no single server becomes overwhelmed with requests.

##### Encryption Management

With a significant portion of web traffic being encrypted, reverse proxies often utilize specialized hardware for cryptographic processes, allowing backend servers to focus on serving content.

#### Early Computer Networking and Dial-up Technology

As computer usage expanded throughout the 20th century, the need for connecting computers to share data became evident. Before the development of technologies like Ethernet, TCP, or IP, early networking methods focused on connecting devices in close proximity. In the late 1970s, two graduate students at Duke University sought to improve long-distance computer connections and realized they could utilize the existing Public Switched Telephone Network (PSTN), also known as Plain Old Telephone Service (POTS).

![081103](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/081103.png)

###### Usenet

Usenet allows different locations, such as colleges, to exchange message using a primitive dial-up connection over POTS. This marked an early use of phone lines for data transmission.

###### Dial-up Connections

Dial-up connections establish a connection by dialing a phone number. Data transfer occurs through modems, which modulate and demodulate signals to convert digital data into audible tones suitable for transmission over telephone lines.

###### Modems

Modems (modulator-demodulator) are devices that enable computers to communicate over phone lines. They convert digital signals into analog for transmission and vice versa.

Modems take data that computers can interpret and turn them into audible wavelengths that can be transmitted over POTS.

###### Baud Rate

Baud rate measures the speed of data transmission over a phone line. Early computers communicated at very low baud rates, starting at about 110 bits per second in the late 1950s and increasing to approximately 300 bits per second during Usenet's development. By the early 1990s, dial-up speeds reached 14.4 kilobits per second.

###### **Decline of Dial-Up**:

Although dial-up technology was once the primary means of long-distance communication between computers, its prevalence has diminished with the rise of broadband technologies. However, it remains in use in some rural areas as the only available option.

### Broadband

Broadband internet has revolutionized the way we access and use the internet, enabling a wide range of applications and services that were not feasible with traditional dial-up connections. The advent of broadband has transformed both business and home internet usage.

Without the development of broadband internet technologies, the internet as we know it today would not exist.

##### T-Carrier Technologies

T-carrier technologies were developed by AT&T to enable multiple phone calls to be transmitted over a single cable. The first specification, known as T1, allowed for the transmission of 24 simultaneous phone calls over a twisted pair of copper wires.

- **T1 Specification**
  - Each of the 24 channels in a T1 line can transmit data at 64 kilobits per second.
  - Over time, "T1" has come to refer to any twisted pair copper connection capable of this speed, even if it doesn't strictly adhere to the original specification.
- Initial Use
  - T1 technology was initially used to connect telecom company sites and facilitate communication between different telecom providers.
- **Advancements to T3 Lines**:
  - T3 lines were developed to multiplex 28 T1 lines, achieving a total throughput of 44.736 megabits per second.
- **Current Status**
  - While T-carrier technologies are still in use, they have largely been surpassed by more cost-effective broadband solutions, such as cable and fiber connections, particularly for small businesses.

#### Digital Subscriber Line (DSL) Technology

DSL tech utilizes existing telephone infrastructure to provide high-speed internet access, allowing simultaneous voice calls and data transmission over the same line. This advancement marked a significant improvement over traditional dial-up connections.

- **Infrastructure Utilization**:
  DSL leverages the twisted pair copper wires used in modern telephone lines, which can transmit significantly more data than what is required for voice calls.

- **Simultaneous Use**:
  DSL technology allows for normal voice phone calls and data transfer to occur concurrently without interference, making it a practical solution for both home and business users.

- **DSL Modems**:
  DSL connections use specialized devices known as DSLAMs (Digital Subscriber Line Access Multiplexers), which establish long-running data connections across phone lines.

- **Types of DSL**:
  - **ADSL (Asymmetric Digital Subscriber Line)**: Offers different speeds for uploading and downloading, typically providing faster download speeds than upload speeds. This is suitable for home users who generally download more data than they upload.
  - **SDSL (Symmetric Digital Subscriber Line)**: Provides equal upload and download speeds, making it ideal for businesses that require consistent data transfer rates for hosting servers.

- **Speed and Variations**:ADSL speeds can range from 256 Kbps to over 25 Mbps, while SDSL typically caps at 1.544 Mbps, similar to a T1 line.Further developments in DSL technology have led to variations like HDSL (High bit-rate Digital Subscriber Line), which offers speeds above 1.544 Mbps.

- **Current Use**:
  While DSL technology is still in use, it has been largely surpassed by more advanced broadband solutions. However, it remains a viable option in areas where newer technologies are not yet available.

#### Cable 

The evolution of television broadcasting has shifted from wireless transmissions to cable technology, paralleling the growth of internet connectivity. Initially, television broadcasts relied on large towers to transmit signals to antennas in homes. However, starting in the late 1940s, cable television technologies were developed to provide access to remote areas lacking coverage from these towers.

- **Early Cable Television**: The first cable television technologies aimed to extend service to rural homes that were out of range of broadcast towers.

- **Cable Broadband Technology**: Cable companies realized that the coaxial cables used for television could transmit significantly more data than required for TV viewing, allowing for high-speed internet access. Cable broadband utilizes frequencies that do not interfere with television broadcasts to deliver internet services.

- **Shared Bandwidth Model**: Unlike DSL, which provides a direct connection to a central office (CO) ensuring guaranteed bandwidth, cable internet operates on a shared bandwidth model. This means multiple users share a certain amount of bandwidth until it reaches the ISP’s core network, which can lead to slower speeds during peak usage times.

- **Cable Modems**: Cable internet connections are typically managed through cable modems, which connect consumer networks to the cable modem termination system (CMTS). The CMTS serves as the point of connection between various cable connections and the ISP’s core network.

#### WANTech

1. **Initial Network Setup**: 
   - **Non-Routable Address Space**: Used for internal IP addresses to conserve the limited supply of public IP addresses.
   - **NAT Configuration**: Allows multiple internal devices to share a single public IP address for internet access.
   - **DNS and DHCP Servers**: Simplify network configuration and management for users.
2. **Expansion to Remote Access**: As the company grows, salespeople require access to internal resources while on the road. A VPN server is configured to enable secure remote connections, with port forwarding set up to ensure accessibility.
3. **Introduction of WAN Technologies**: With the opening of a new office in another city, the need arises for a Wide Area Network (WAN) to connect multiple physical locations. A WAN allows different offices to function as a single network despite being geographically dispersed.
4. **Local Loop and Demarcation Points**: Each office network ends at a demarcation point, where the ISP's network takes over. The local loop refers to the connection between the demarcation point and the ISP's regional office, which can include T-carrier lines or high-speed optical connections.
5. **Data Transport Protocols**: WANs utilise various protocols at the data link layer to transport data between sites. These protocols are also fundamental to the operation of the internet, differing from the more familiar Ethernet protocols.

