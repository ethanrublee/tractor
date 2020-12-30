.. _chapter-core_module:

Core
=====

The `core` module provides infrastructure for all other modules.

Serialization
-------------

Farm-ng uses `protocol buffers <https://developers.google.com/protocol-buffers>`_
(v3) for serialization.

A standard approach to serialization allows us to define data structures, library APIs, and network APIs in a format that
is language-neutral, and both forwards and backwards-compatible.

For more about the the choice of protocol buffers, see TODO.

Interprocess Communication
--------------------------

Farm-ng uses a lightweight, decentralized UDP-based protocol called the **Event Bus** for interprocess communication.

UDP packets contain a single binary-serialized ``Event`` message.

Processes announce their presence to the bus periodically via UDP multicast, and publish events to their peers via UDP unicast.

The event bus supports the concept of `subscriptions` to limit the traffic received by a peer.

While UDP datagrams are limited to 65535 bytes, messages may include references (``Resource`` fields) to larger chunks of persistent data (see below).

Persistent Data
---------------

Farm-ng persists data such as configuration files and logs to the filesystem.

The directory containing this data, along with a set of conventions that describe its structure, are referred to collectively as the **Blobstore**.

Farm-ng provides libraries to facilitate safe, structured interaction with the blobstore.
However, as a directory on disk, the blobstore is also always available for introspection and manipulation via standard command-line or desktop tools.

Whenever possible, we prefer to persist data in standard file formats, rather than as opaque binary blobs.
For example, image data is persisted as a ``.png`` or H264-encoded ``.mp4``.
The result is a datastore that's somewhat heterogeneous, but highly browsable, space-efficient, and compatible with third-party tools.

Logging / Playback
------------------

Farm-ng supports logging and replay of eventbus traffic via a simple binary log format.

A log consists of binary-serialized ``Event`` messages delimited by a ``uint32`` message length prefix.

``Event`` messages encode events as a ``google.protobuf.Any``, so it's assumed that a log reader
has access to a type registry, or the original message definitions, to properly interpret the contents of a log.

A log replayer is available as a binary and a library in the ``core`` module.

Services and Programs
---------------------
Services and programs are software processes that participate on the eventbus.

Services typically encapsulate the core, persistent processes of an application, such as
sensor and actuator drivers, planners, loggers, etc.

Services may be started manually from the command line, but are usually managed via ``systemd`` or a similar service manager.

Programs typically encapsulate ephemeral processes intended for ad hoc use, such as a calibration routine.

Programs may be invoked from the command line, or via the eventbus, using the ``programd`` service.

Hardware
--------

Farm-ng aims to support a wide array of sensors, actuators, and compute platforms.

Supported hardware to date includes camera drivers (Intel Realsense, Azure Kinect), motor drivers (ODrive, Vesc),
and NVIDIA Jetson compute.