package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;


@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/cards")
	public ResponseEntity<JsonResult> readCards() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/tasks")
	public ResponseEntity<JsonResult> readTasks(String cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findByCardNo(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> insertTask(TaskVo vo) {
		System.out.println(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.insert(vo)));
	}
	
	@PutMapping("/task")
	public ResponseEntity<JsonResult> updateTaskDone(TaskVo vo) {
		System.out.println("done...." + vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.setDone(vo)));
		
	}
}
