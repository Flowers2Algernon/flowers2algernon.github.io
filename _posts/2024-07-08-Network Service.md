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



​	

