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



