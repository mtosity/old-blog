---
template: post
title: Đi sâu vào những cách quản lý state trong React (Redux vs. Context vs. State)
slug: di-sau-vao-nhung-cach-quan-ly-state-trong-react
draft: true
date: 2020-10-02T12:31:52.324Z
description: >
  An in-depth look at state management in React. Translated from Denny Scott
  Medium articles
category: ReactJS
tags:
  - ReactJS
---
Original post from [Denny Scott / Redux vs. Context vs. State](https://medium.com/better-programming/redux-vs-context-vs-state-4202be6d3e54)

# The Store-Owns-All Era (store chứa tất cả)

**Redux** cho người sử dụng một **store** trung tâm để lưu tất cả các state, chỉ có thể truy cập bằng kiến trúc **flux**. Yuh, nó lưu tất cả. Những năm đầu tiên nó ra đời, lưu tất cả các *state* trong **store** có vẻ là điều bình thường, bất kể nó là *state* gì.

Để phù hợp với kiểu quản lý **state** này thì những app đều được xây dựng dựa trên ý tưởng *dumb components* và *smart components/containers*. *Dumb components* không có **state** gì cả chỉ dùng để hiển thị view, sẽ có nhiều như vậy và *containers* sẽ là nơi để lấy data. 

Không lâu thì **stores** thành một mớ data hỗn lộn không thể nào theo dõi và phải hiểu sâu *codebase* để có thể hiểu được tất cả những huần hòe gì chứa trong **stores**. Và cái này nữa, khái niệm *dumb/smart components* có lẽ đã bị lạm dụng - rất nhiều *codebase* chỉ có 1 container, và phải truyền props như "khoan lỗ xuống lõi trái đất".
