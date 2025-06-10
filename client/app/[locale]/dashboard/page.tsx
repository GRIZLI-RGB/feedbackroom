"use client";

import { PlusCircle, Filter, Search, BarChart2, Users } from "lucide-react";
import Link from "next/link";
import { useRipple } from "react-use-ripple";

import { useEffect, useRef, useState } from "react";
import Modal from "@components/modal";

// Mock data
const projects = [
	{
		id: 1,
		name: "Лендинг SaaS",
		url: "saas.example.com",
		feedbackCount: 12,
		targetFeedback: 20, // Добавляем цель по отзывам
		lastUpdated: "2 часа назад",
		type: "website",
		status: "active",
		priority: "high", // Добавляем приоритет
	},
	{
		id: 2,
		name: "Мобильное приложение",
		url: "myapp.com",
		feedbackCount: 8,
		targetFeedback: 15,
		lastUpdated: "Вчера",
		type: "app",
		status: "paused",
		priority: "medium",
	},
	{
		id: 3,
		name: "Telegram бот",
		url: "@myfeedbackbot",
		feedbackCount: 23,
		targetFeedback: 30,
		lastUpdated: "5 минут назад",
		type: "bot",
		status: "active",
		priority: "low",
	},
];

const projectTypes = [
	{
		id: "website",
		name: "Веб-сайт",
		icon: "🌐",
		description: "Лендинги, промо-страницы, веб-приложения",
	},
	{
		id: "app",
		name: "Приложение",
		icon: "📱",
		description: "iOS, Android или кроссплатформенные приложения",
	},
	{
		id: "bot",
		name: "Telegram бот",
		icon: "🤖",
		description: "Чат-боты для Telegram",
	},
];

const audienceTypes = [
	{ id: "general", name: "Общая аудитория" },
	{ id: "business", name: "Бизнес-аудитория" },
	{ id: "teenagers", name: "Подростки" },
	{ id: "students", name: "Студенты" },
];

export default function DashboardPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [step, setStep] = useState(1);
	const [selectedProjectType, setSelectedProjectType] = useState("");
	const [selectedAudience, setSelectedAudience] = useState("");

	const newButtonRef = useRef<HTMLButtonElement>(null);
	const filtersButtonRef = useRef<HTMLButtonElement>(null);
	const addProjectCardRef = useRef<HTMLButtonElement>(null);

	useRipple(newButtonRef as React.RefObject<HTMLElement>, {
		rippleColor: "rgba(59, 130, 246, 0.2)",
	});

	useRipple(filtersButtonRef as React.RefObject<HTMLElement>, {
		rippleColor: "rgba(255, 255, 255, 0.2)",
	});

	useRipple(addProjectCardRef as React.RefObject<HTMLElement>, {
		rippleColor: "rgba(255, 255, 255, 0.2)",
	});

	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Закрытие при клике вне dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const closeModal = () => {
		setIsModalOpen(false);
		setStep(1);
		setSelectedProjectType("");
		setSelectedAudience("");
	};

	const handleNextStep = () => {
		setStep((prev) => prev + 1);
	};

	const handlePrevStep = () => {
		setStep((prev) => prev - 1);
	};

	const handleSubmit = () => {
		// Здесь будет логика отправки формы
		closeModal();
	};

	return (
		<div className="flex flex-col gap-6">
			{/* Header */}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold text-white">
						Мои проекты
					</h1>
					<p className="text-blue-100">
						Анализируйте обратную связь по вашим проектам
					</p>
				</div>

				<div className="flex gap-3 w-full md:w-auto">
					<div className="relative" ref={dropdownRef}>
						<button
							ref={filtersButtonRef}
							onClick={() => setIsOpen(!isOpen)}
							className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all"
						>
							<Filter size={18} />
							<span>Фильтры</span>
						</button>

						<div
							className={`
      absolute top-12 left-0 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 w-64 z-10
      transform transition-all duration-200 origin-top
      ${
			isOpen
				? "scale-100 opacity-100 pointer-events-auto"
				: "scale-95 opacity-0 pointer-events-none"
		}
    `}
						>
							<div className="space-y-3">
								{/* <div>
									<label className="block text-sm text-white/80 mb-1">
										Тип проекта
									</label>
									<select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
										<option>Все типы</option>
										<option>Веб-сайт</option>
										<option>Приложение</option>
										<option>Telegram бот</option>
									</select>
								</div> */}
								<div>
									<label className="block text-sm text-white/80 mb-1">
										Тип проекта
									</label>
									<div className="flex flex-wrap gap-2">
										{projectTypes.map((item) => (
											<button
												key={item.name}
												className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-white"
											>
												{item.name}
											</button>
										))}
									</div>
								</div>

								<div>
									<label className="block text-sm text-white/80 mb-1">
										Статус
									</label>
									<div className="flex flex-wrap gap-2">
										{[
											"Активные",
											"На паузе",
											"Завершённые",
										].map((item) => (
											<button
												key={item}
												className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-white"
											>
												{item}
											</button>
										))}
									</div>
								</div>

								<button className="w-full bg-white text-blue-600 py-2 rounded-lg text-sm font-medium mt-2">
									Применить
								</button>
							</div>
						</div>
					</div>

					<button
						ref={newButtonRef}
						onClick={() => setIsModalOpen(true)}
						className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl font-medium transition-all"
					>
						<PlusCircle size={18} />
						<span>Новый проект</span>
					</button>
				</div>
			</div>

			{/* Search and Stats */}
			<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
				<div className="relative mb-4">
					<Search
						className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-200"
						size={18}
					/>
					<input
						type="text"
						placeholder="Поиск проектов..."
						className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<StatCard
						title="Всего проектов"
						value={projects.length}
						icon={<BarChart2 size={20} />}
					/>
					<StatCard
						title="Охват аудитории"
						value={"192"}
						icon={<Users size={20} />}
					/>
					<StatCard
						title="Получено отзывов"
						value={projects.reduce(
							(acc, p) => acc + p.feedbackCount,
							0
						)}
						icon={<PlusCircle size={20} />}
					/>
				</div>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}

				{/* Add New Project Card */}
				<button
					onClick={() => setIsModalOpen(true)}
					ref={addProjectCardRef}
					className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-dashed border-white/30 rounded-2xl p-6 transition-all min-h-[142px]"
				>
					<PlusCircle size={32} className="text-white" />
					<span className="text-white font-medium">
						Добавить проект
					</span>
				</button>
			</div>

			<Modal open={isModalOpen} onClose={closeModal}>
				<div className="p-6">
					<h2 className="text-2xl font-bold text-blue-800 mb-2">
						Добавить новый проект
					</h2>
					<div className="flex mb-6">
						{[1, 2, 3].map((stepNumber) => (
							<div key={stepNumber} className="flex items-center">
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										step === stepNumber
											? "bg-blue-600 text-white"
											: step > stepNumber
											? "bg-green-100 text-green-600"
											: "bg-gray-100 text-gray-400"
									}`}
								>
									{stepNumber}
								</div>
								{stepNumber < 3 && (
									<div
										className={`h-1 w-12 ${
											step > stepNumber
												? "bg-green-100"
												: "bg-gray-100"
										}`}
									/>
								)}
							</div>
						))}
					</div>

					{/* Шаг 1: Выбор типа проекта */}
					{step === 1 && (
						<div className="space-y-4">
							<h3 className="text-lg font-medium text-gray-700">
								Выберите тип проекта
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								{projectTypes.map((type) => (
									<div key={type.id}>
										<button
											onClick={() =>
												setSelectedProjectType(type.id)
											}
											className={`w-full p-4 border-2 rounded-xl text-center transition-all ${
												selectedProjectType === type.id
													? "border-blue-500 bg-blue-50"
													: "border-gray-200 hover:border-blue-300"
											}`}
										>
											<div className="text-3xl mb-2">
												{type.icon}
											</div>
											<h4 className="font-medium">
												{type.name}
											</h4>
											<p className="text-sm text-gray-500 mt-1">
												{type.description}
											</p>
										</button>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Шаг 2: Выбор аудитории */}
					{step === 2 && (
						<div className="space-y-4">
							<h3 className="text-lg font-medium text-gray-700">
								Целевая аудитория
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{audienceTypes.map((audience) => (
									<div key={audience.id}>
										<button
											onClick={() =>
												setSelectedAudience(audience.id)
											}
											className={`w-full p-3 border rounded-lg text-left transition-all ${
												selectedAudience === audience.id
													? "border-blue-500 bg-blue-50"
													: "border-gray-200 hover:border-blue-300"
											}`}
										>
											{audience.name}
										</button>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Шаг 3: Детали проекта */}
					{step === 3 && (
						<div className="space-y-4">
							<h3 className="text-lg font-medium text-gray-700">
								Информация о проекте
							</h3>
							<div className="space-y-3">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Название проекта
									</label>
									<input
										type="text"
										className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
										placeholder="Мой крутой проект"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										URL или идентификатор
									</label>
									<input
										type="text"
										className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
										placeholder="example.com или app_id"
									/>
								</div>
							</div>
						</div>
					)}

					{/* Навигация по шагам */}
					<div className="flex justify-between mt-8">
						{step > 1 ? (
							<button
								onClick={handlePrevStep}
								className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg"
							>
								Назад
							</button>
						) : (
							<div></div>
						)}

						{step < 3 ? (
							<button
								onClick={handleNextStep}
								disabled={
									(step === 1 && !selectedProjectType) ||
									(step === 2 && !selectedAudience)
								}
								className={`px-6 py-2 rounded-lg font-medium ${
									(step === 1 && !selectedProjectType) ||
									(step === 2 && !selectedAudience)
										? "bg-gray-200 text-gray-400 cursor-not-allowed"
										: "bg-blue-600 text-white hover:bg-blue-700"
								}`}
							>
								Далее
							</button>
						) : (
							<button
								onClick={handleSubmit}
								className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
							>
								Создать проект
							</button>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
}

// Компонент карточки проекта
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const progress = Math.min(
    Math.round((project.feedbackCount / project.targetFeedback) * 100),
    100
  );

  const typeStyles = {
    website: {
      color: "text-blue-600",
      bg: "bg-white",
      border: "border-blue-200",
      progressColor: "bg-blue-500",
      hoverEffect: "hover:ring-2 hover:ring-blue-200"
    },
    app: {
      color: "text-purple-600",
      bg: "bg-white",
      border: "border-purple-200",
      progressColor: "bg-purple-500",
      hoverEffect: "hover:ring-2 hover:ring-purple-200"
    },
    bot: {
      color: "text-green-600",
      bg: "bg-white",
      border: "border-green-200",
      progressColor: "bg-green-500",
      hoverEffect: "hover:ring-2 hover:ring-green-200"
    }
  };

  const currentType = typeStyles[project.type as keyof typeof typeStyles];

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`block rounded-lg p-5 transition-all ${currentType.bg} border ${currentType.border} ${currentType.hoverEffect}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{project.name}</h3>
          <p className="text-gray-600 text-sm">{project.url}</p>
        </div>
        <span className={`text-2xl ${currentType.color}`}>
          {project.type === "website" ? "🌐" : project.type === "app" ? "📱" : "🤖"}
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs px-2 py-1 rounded-full ${
          project.status === "active" 
            ? "bg-green-100 text-green-800" 
            : "bg-yellow-100 text-yellow-800"
        }`}>
          {project.status === "active" ? "Активен" : "Пауза"}
        </span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${currentType.progressColor}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </Link>
  );
}

// Компонент статистической карточки
function StatCard({
	title,
	value,
	icon,
	trend,
	description,
}: {
	title: string;
	value: string | number;
	icon: React.ReactNode;
	trend?: "up" | "down";
	description?: string;
}) {
	return (
		<div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="bg-white/10 p-2 rounded-lg text-white">
						{icon}
					</div>
					<div>
						<p className="text-sm text-blue-100">{title}</p>
						<p className="text-xl font-bold text-white">{value}</p>
						{description && (
							<p className="text-xs text-blue-200 mt-1">
								{description}
							</p>
						)}
					</div>
				</div>
				{trend && (
					<div
						className={`p-1 rounded-full ${
							trend === "up"
								? "bg-green-500/20 text-green-400"
								: "bg-red-500/20 text-red-400"
						}`}
					>
						{trend === "up" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
								<polyline points="16 7 22 7 22 13" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
								<polyline points="16 17 22 17 22 11" />
							</svg>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
