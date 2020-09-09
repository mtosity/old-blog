---
template: post
title: Biến máy tính không sử dụng thành server
slug: bien-may-tinh-khong-su-dung-thanh-server
draft: false
date: 2020-09-07T15:02:50.837Z
description: Mình sẽ hướng dẫn tạo server từ máy tính không sử dụng, từ ssh,
  host website, trỏ domain cho đến jupyter notebook chạy Machine Learning
category: Computer
tags:
  - Server
socialImage: /media/select-snaps-to-install.png
---
## Overview

Mình có một chiếc laptop hư cổng USB, chay bin và CPU i3 chạy max chậm với win 10 :<< nên quyết định build server để host website, API và chạy Machine Learning

## Cài đặt linux

Mình sử dụng [Ubuntu Server 20.04.1 LTS](https://ubuntu.com/download/server). Cài đặt khá đơn giản, như cài win bình thường thôi, những lưu ý khi cài:

* Phải cắm mạng lan khi cài đặt vì Ubuntu sẽ tải và cài drivers sau khi cài OS
* Tích vào ô `Install Open SSH`, [SSH](https://en.wikipedia.org/wiki/Secure_Shell) đơn giản là truy cập terminal của server từ một máy khác, `Import SSH identity` thì để `No`, mình sẽ import sau
* Ở Mirror address thì chuyển từ `http://us.archive...` thành `vn.archive` thì sẽ nhanh hơn
* Chọn những soft mà bạn sử dụng khi ở `Featured Server Snaps`, mình chọn `docker, postgresql10, heroku`

Sau khi cài và `Reboot` thì Ubuntu sẽ cài Soft, sau khi xong thì đăng nhập bằng username, password lúc cài thì sẽ thấy màn hình terminal thế này:

![ubuntu server terminal](/media/log-into-new-ubuntu-20.04-server.png)

Tất nhiên server chỉ có terminal thôi nhá! Không có GUI gì đâu 😆 

## Set up ban đầu

1. **Update Ubuntu**

Như bao Ubuntu khác 😆 

```
sudo apt-get update
sudo apt-get upgrade
```

2. **Ngăn OS ngủ khi đóng màn hình laptop**

`sudo nano /etc/systemd/logind.conf`

Vì chỉ toàn là terminal nên chỉ edit file bằng nano và vim, vim pro quá nên xài nano vậy :>. [Hướng dẫn sử dụng nano](https://quantrimang.com/huong-dan-co-ban-ve-trinh-soan-thao-nano-167743), cơ bản là `CRT + O` rồi `Enter` để save, `CRT + X` để thoát.

Sửa `#HandleLidSwitch=suspend` thành `HandleLidSwitch=ignore`, save file rồi gõ vào terminal `sudo systemctl restart systemd-logind` để load lại file `logind.conf`

3. **Tìm private IP, public IP và Port Forwarding**

![router](/media/forwarding.png)

**Private IP** là IP nội bộ của máy server bên trong Router, có thể truy cập server bằng IP này từ máy cùng router nhưng ngoài Router không thể kết nối vào (trên hình IP server là 192.168.1.100).

```
minhtamos@minhtamos:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enp9s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether e0:db:55:af:8b:ff brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.12/24 brd 192.168.1.255 scope global dynamic enp9s0
       valid_lft 84703sec preferred_lft 84703sec
    inet6 2001:ee0:5534:3ab0:e2db:55ff:feaf:8bff/64 scope global dynamic mngtmpaddr noprefixroute
       valid_lft 1143sec preferred_lft 1143sec
    inet6 fe80::e2db:55ff:feaf:8bff/64 scope link
       valid_lft forever preferred_lft forever
3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default
    link/ether 02:42:bb:ba:98:42 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
       valid_lft forever preferred_lft forever
```

Khi chạy lệnh `ip a` thì có thể thấy private IP của mình là `192.168.1.12` (Mạng lan thì để ý enXXXX)

**Public IP** có thể coi là IP của Router, dùng để kết nối ngoài Router, nhưng cần phải cài đặt [Port Fowarding](https://www.youtube.com/watch?v=2G1ueMDgwxw) để bên ngoài có thể truy cập.
Ví dụ port Web HTTP là 80 (để hosting,...) thì nếu có request từ bên ngoài đến Router, Router phải mở port 80 và đưa request cho đúng máy server IP `192.168.1.12:80`

```
minhtamos@minhtamos:~$ curl https://ipinfo.io/ip
14.237.192.124
```

Khi chạy lệnh `curl https://ipinfo.io/ip` thì có thể thấy public IP của mình là 14.237.192.124

**Port Fowarding**

Để cài đặt cho Router, vào IP private của Router thường là `192.168.1.1`, đăng nhập và đi đến `Advanced Features => NAT => ADD và điền như bên dưới`, mình sài VNPT.

![vnpt](/media/screen-shot-2020-09-08-at-21.10.48.png)

Để biết cổng 80 HTTP đã mở chưa vào [canyouseeme](https://canyouseeme.org/) để check, nếu success là OK

## Host NodeJS

* **[Cài đặt Node](https://github.com/nodesource/distributions/blob/master/README.md):**

```
# As root
curl -sL https://rpm.nodesource.com/setup_lts.x | bash -

# No root privileges 
curl -sL https://rpm.nodesource.com/setup_lts.x | sudo bash -
```

* **Tạo project Express**

```
mkdir exp_pro
npx express-generator
npm install
npm start
```

Nó sẽ start ở port 3000, ủa rồi sao thấy, HTTP là port 80 mà? Nếu có máy trong router thì có thể truy cập bằng private_server_ip:3000, ủa nhưng rồi ngoài router thì sao?

Mình có nhiều cách, có thể cài đặt cho Router Port Fowarding vào private_server_ip:3000 nhưng *chuyên nghiệp* hơn thì ta sẽ cài đặt **Nginx** để quản lý các request đến server

* [Cài đặt Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

```
sudo apt update
sudo apt install nginx
sudo ufw allow 'Nginx HTTP' 
```

Dòng cuối là cho Nginx bypass firewall, tiếp theo chũng ta config nginx, gõ `sudo nano /etc/nginx/sites-available/default` và sửa thành như sau:

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name _;

        location / {
                proxy_pass http://localhost:3000;
        }
}
```

File này nói lên rằng: HTTP port là 80, với route root "/", trước khi nó đến port 80 thì sẽ proxy qua port 3000 trước (chính là Project Node của mình)

Restart Nginx bằng câu lệnh `sudo service nginx restart`, vào project node lúc nãy và `npm start`

Vậy là OK rồi đó, gõ IP vào trình duyệt bạn sẽ thấy như thế này 🎉 🎉 🎉

![express](/media/screen-shot-2020-09-08-at-20.52.19.png)

* Process manager

`npm start` cũng được nhưng vậy thì bạn phải giữ shell đó không được tắt và nó cũng không được CPU quản lý tốt, nên chúng ta cần PM2 package

```
npm install pm2 -g
cd ~/trynode
pm2 start bin/www --name main #pm2 start file_name --name name
```

OK vậy Node server sẽ luôn chạy với tên là `main`, muốn list các Node server thì gõ `pm2 l`, có thể stop hay remove các Node server, [PM2 docs](https://pm2.keymetrics.io/docs/usage/quick-start/)

## SSH

Tất nhiên bạn phải cần phải truy cập terminal của server từ một máy khác để copy project hay chạy script. 
Đầu tiên cần phải mở cổng 22 của Router

![ssh router](/media/screen-shot-2020-09-08-at-21.17.59.png)

Để vào chỉ cần vào terminal gõ `ssh username@public_ip` điền password và bạn đã vào terminal của server

* **[Generate SSH](https://www.ssh.com/ssh/keygen/) key để SSH không cần password**

Ở terminal máy cần ssh vào server không cần pass, tạo một ssh-key cho máy của mình (coi như key đó là danh tính máy), gõ:

`ssh-keygen`

Ở chỗ passphrase, cứ để trống rồi enter, tránh hỏi password nữa khi ssh, nhớ copy đường dẫn tới ssh-key

`ssh-copy-id -i path_to_ssh_key user@host`

với path_to_ssh_key là đường dẫn tới ssh-key của máy mới vừa tạo, user là ussername của server và host là public_ip của server

![minhtamos ssh](/media/screen-shot-2020-09-08-at-21.16.34.png)

## Tạo Domain với [freenom](https://www.freenom.com/)

Để tạo domain và trỏ về server, vào [freenom](https://www.freenom.com/) tạo tài khoản đăng nhập. `Service => Register a New Domain => gõ domain bạn muốn`

![freenom domain](/media/screen-shot-2020-09-08-at-21.47.39.png)

Select rồi check out, chọn 12 months, chọn Use DNS rồi điền IP là public IP của bạn

![freenom ip](/media/screen-shot-2020-09-08-at-21.49.16.png)

Xong **Continue** và **Complete Order**, mình đợi khoảng 2 tiếng thì mình có thể truy cập được bằng domain `minhtamos.cf`

## Jupyter Notebook

Mình muốn server mình có thể chạy notebook để những lúc máy mình đang bận thì có thể chạy *Machine Learning* ở server để đỡ cho máy chính

* **[Cài đặt anaconda](https://linuxize.com/post/how-to-install-anaconda-on-ubuntu-20-04/) và [Jupyter Notebook](https://jupyter.org/install)**

Mặc định Ubuntu 20.04 đã có python rồi nên không cần cài, gõ các lệnh sau để cài đặt anaconda và jupyter notebook:

```
sudo apt install libgl1-mesa-glx libegl1-mesa libxrandr2 libxrandr2 libxss1 libxcursor1 libxcomposite1 libasound2 libxi6 libxtst6
wget -P /tmp https://repo.anaconda.com/archive/Anaconda3-2020.02-Linux-x86_64.sh
bash /tmp/Anaconda3-2020.02-Linux-x86_64.sh

conda install -c conda-forge jupyterlab
```

Nhớ chọn yes hết nhá!

Vì Jupyter Notebook gặp một số [vấn đề](https://github.com/jupyter/notebook/issues/625) với SSL nên khó làm với Nginx. Nên mình sẽ tạo [SSH tunel](https://fizzylogic.nl/2017/11/06/edit-jupyter-notebooks-over-ssh/) để truy cập notebooks bên server

```
# ở phía server mở jupyter notebook với port 8080
jupyter notebook --no-browser --port=8080
# mở ssh tunel ở máy muốn truy cập vào
ssh -N -L 8080:localhost:8080 <remote_user>@<remote_host>
```

Sau khi gõ lệnh mở ssh tunel thì nó không có output cứ như bị đơ nhưng không, nó đang mở đấy 😆 . Xong thì có thể truy cập notebook của server ở `http://localhost:8080`

![](/media/screen-shot-2020-09-08-at-22.45.21.png)