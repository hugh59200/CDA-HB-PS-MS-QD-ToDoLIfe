//package com.cda.todolife;
//
//import java.util.Comparator;
//
//import org.junit.jupiter.api.ClassDescriptor;
//import org.junit.jupiter.api.ClassOrderer;
//import org.junit.jupiter.api.ClassOrdererContext;
//
//
//public class SpringBootTestClassOrderer implements ClassOrderer {
//	@Override
//	public void orderClasses(ClassOrdererContext classOrdererContext) {
//		classOrdererContext.getClassDescriptors().sort(Comparator.comparingInt(SpringBootTestClassOrderer::getOrder));
//	}
//
//	private static int getOrder(ClassDescriptor classDescriptor) {
//		if (classDescriptor.getTestClass() == WatchLisTest.class) {
//			return 1;
//
//		} else if (classDescriptor.getTestClass() == FilmTest.class) {
//			return 2;
//
//		} else if (classDescriptor.getTestClass() == SerieTest.class) {
//			return 3;
//
//		} else if (classDescriptor.getTestClass() == LivreTest.class) {
//			return 4;
//
//		} else {
//			return 5;
//		}
//	}
//}
