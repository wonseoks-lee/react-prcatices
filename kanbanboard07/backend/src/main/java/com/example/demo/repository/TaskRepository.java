package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;
	

	public List<TaskVo> findByCardNo(String cardNo) {
		return sqlSession.selectList("task.findByCardNo", cardNo);
	}


	public Boolean setDone(TaskVo vo) {
		return 1 == sqlSession.update("task.setDone", vo);
	}


	public Boolean insert(TaskVo vo) {
		return 1 == sqlSession.insert("task.insert", vo);
	}


	public Boolean delete(TaskVo vo) {
		return 1 == sqlSession.delete("task.delete", vo);
	}

	
}
